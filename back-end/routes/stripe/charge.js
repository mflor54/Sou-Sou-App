let stripe = require('../../constants/stripe');
let db = require('../../db/queries');
let express = require('express');
let axios = require('axios');
let router = express.Router();

// router.get('/', newChargeAndTransfers);

newChargeAndTransfers = async (req, res, next) => {
    const groupID = parseInt(req.params.group_id, 10);
    const user = req.user;
    if(!groupID) res.status(400).send('Group does not exist');
    //SELECT * FROM groups WHERE ID = ${groupID};
    const group = db.getSingleGroup(groupID);
    //SELECT * FROM users WHERE group_id = ${groupID};
    const members = db.getMembersFromGroup(groupID);

    let groupMembersWithStripe = members.map(el => {
        return el.stripe_account_id;
    })

    // check if user is part of group
    if(!groupMembersWithStripe.includes(req.user.stripe_account_id)){ 
        res.status(403).send('Not a member');
    }
    
    let totalPaymentsInMonth = (members.length-1) * 4;
    
    for(let i = 0; i < members.length; i++) {
      if(members[i] === user.stripe_account_id) {
        continue;
      }
      let pick = members[i];
      //SELECT * FROM payments WHERE group_id = ${groupID} AND user_id = ${pick.id};
      const numOfPayments = db.getNumberOfPayments(pick.id, groupID); //potentially async problem might have to user try catch async
      //check to see if pick has received total number of payments
      //based on group they are in;
      if(numOfPayments.length >= totalPaymentsInMonth){
        continue;
      }

      try {
        const charge = await stripe.charges.create({
            amount: group.weekly_payout,
            customer: user.stripe_account_id,
            destination: {
                account: pick.stripe_account_id
            }
        })
      }
      catch(err) {
        console.log(err);
      }
      
      db.paymentsIn(user.id, charge.amount, groupID, charge.id);
      db.paymentsOut(pick.id, charge.amount, groupID, charge.id);
      res.status(200).send(charge);
      break;
    }
    return;
}

module.exports = {
    newChargeAndTransfers: newChargeAndTransfers,
}