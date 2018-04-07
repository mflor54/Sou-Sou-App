let stripe = require('../../constants/stripe');
let db = require('../../db/queries');
let express = require('express');
let axios = require('axios');
let router = express.Router();

// make post request first and run the contigencies before actually making the charge THIS IS THE POST REQUEST
makeCharge = async (req, res) => {
    const groupID = parseInt(req.params.groupID, 10);
    const user = req.user;
    console.log('User info => ' + Object.getOwnPropertyNames(req));
    console.log('user info two => ' + JSON.stringify(req.user));
    if(!groupID) res.status(400).send('Group does not exist');
    // SELECT * FROM groups WHERE id = ${groupID}
    let group;
    let members;
    //=======================================================
    // db.getGroup(groupID)
    //    .then((data) => {
    //       group = data;
    //    })
    //    .catch((err) => {
    //       console.log('Error at getting group ' + err);
    //     });
    // //SELECT * FROM users WHERE group_id = ${groupID}
    // db.getMembersFromGroup(groupID)
    //   .then((data) => {
    //       members = data;
    //   })
    //   .catch((err) => {
    //     console.log('Error at getting members  ' + err)
    //   })
    //=======================================================

    try {
        group = await db.getGroup(groupID)
    }
    catch (err) {
        console.log('group err ' + err);
    }
    try {
        members = await db.getMembersFromGroup(groupID)
    }
    catch (err) {
        console.log('members err ' + err);
    }

    console.log('groups => ' + JSON.stringify(group))
    console.log('members => ' + JSON.stringify(members));

    // create array with stripe accounts only
    let membersWithStripe = members.map((el) => {
        return el.stripe_id;
    })

    console.log('membersWithStripe => ' + membersWithStripe);

    // check if user is part of the group with stripe accts
    //return res.status(403) for Forbidden
    if(!membersWithStripe.includes(user.stripe_id)) {
        res.status(403).send('Not a member');
    }

    // calculate number of payments per month using # of members
    // subtract by 1 to omit the one being paid
    let paymentCount = (members.length - 1) * 4;

    for(let i = 0; i < members.length; i++) {
        // check to make sure count in loop isn't user
        console.log('current pick ===> ' + JSON.stringify(members[i]));
        if(membersWithStripe[i] === user.stripe_id) {
            continue;
        }
        let pick = members[i];
        let pickid = parseInt(pick.id, 10);
        //SELECT * FROM payments WHERE group_id = ${groupID} AND user_id = ${pick.id};
        try {
            let currentCount = await db.getNumberOfPayments(pickid, groupID);
        }
        catch(err) {
            console.log('Error at number of payments ' + err)
        }
        // check to see if current count in loop already received max number of payments for month
        // i.e their turn in money pool already came up
        if(currentCount >= paymentCount) {
            continue;
        }
        // current pick should be the current payee in the money pool
        // so make charge against user, and destination to pick
        try {
            const charge = await stripe.charges.create({
                amount: group.weekly_payout,
                curreny: 'usd',
                customer: user.stripe_id,
                destination: {
                    account: pick.stripe_id
                }
            })
        }
        catch(err) {
            console.log('Error at making charge ' + err)
        }
        
        // finally post the information to the database for paymentsIn and paymentsOut tables
        // might have to do it using try and catch to avoid async issues
        console.log('This is charge => ' + charge);
        db.paymentsIn(user.id, charge.amount, groupID, charge.id);
        db.paymentsOut(pick.id, charge.amount, groupID, charge.id);
        break;
    }
    //finally, redirect user back to groups profile page after successful payment
    res.redirect(`http://localhost:3000/groups/${groupID}` || res.redirect(`http://localhost:3000/groups/${req.params.group_id}`))
    return;
}

module.exports = {
    makeCharge: makeCharge,
}