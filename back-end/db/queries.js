const db = require("./index");
const stripe = require("../constants/stripe");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

// Query to get all groups for public groups page, map in the front-end
getGroups = (req, res, next) => {
     db.any("select * from groups")
    .then((data) => {
      console.log(data);
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved all groups'
        });
    })
    .catch((err) => {
        return next(err);
    })
}


//Get all information of all users
getAllUsers = (req, res, next) => {
  db
    .any("select * from users")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Crystal has Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

getSingleUsers = (req, res, next) => {

  db
    .any("select * from users where first_name=Jason")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Crystal has Retrieved ALL users"
      });

    })
    .catch(function(err) {
      return next(err);
    });
}



//Login users
loginUser = (req, res, next) => {
  passport.authenticate("local", {});

  const authenticate = passport.authenticate("local", (err, user, info) => {
    console.log('User: ', user);
    if(err) {
      res.status(500).send("Error while trying to logging in, Please try again")
    } else if (!user) {
      res.status(401).send("Invalid Username or Password, Please try again");
    } else if (user) {
      req.logIn(user, (err) => {
        if (err) {
          res.status(500).send("Login Error");
        }else {
           console.log('USER====>:',user);
          console.log('Res Login====>:',res);
          console.log(res.status);
          res.status(200).send(user);


          // res.redirect('/users/profile');
        }
      })
    }
  })
  return authenticate(req, res, next) //redirect - erty
}
//Create user with resistration and login users
createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  console.log('createUser hash: ', hash);

  db.any('INSERT INTO users (first_name, last_name, username, password_digest, email) VALUES (${firstName}, ${lastName}, ${username}, ${password}, ${email})', {
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    username: req.body.username,
    email:req.body.email,
    password: hash,
  })
  .then(() => {
    //Would like to authenticate and redirect to profile or login
    res.send(`created user: ${req.body.username}`);
    if(next) { // this is super hacky, next will be undefined in seed.js
        loginUser()
    }
  })
    .catch(err => {
      console.log('Create User Error: ',err);
      res.status(500).send('error creating user')
    })
  }



//User logout
logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("User logout")
}



getUserInfo = (req, res, next) => {

  console.log(req.body.userID);
    db.one('select * from users inner join groups on groups.creator = ${userID} and users.id = ${userID}',{
      userID:req.params.userID
    })
    .then((data) => {
    //   console.log("DATA:=======================================> ", data);
      res.status(200).json({
          status: "success",
          data: data,
          message: 'Retrieved group info'
      });
    })
    .catch((err) => {
    //   console.log("ERROR:=====================================> ",err);
        return next(err);
    });
}


// select one group from groups list page from front-end(list provided by getAllGroups)
getSingleGroup = (req, res, next) => {
  console.log("REQ Group ID: " + req.params.groupID);
    db.one('select * from groups where id=${groupID}',
        {
            groupID: req.params.groupID
        }
    )
    .then((data) => {
      console.log(data);
        res.status(200).json({
            status: "success",
            data: data,
            message: 'Retrieved group info'
        });
    })
    .catch((err) => {
        return next(err);
        console.log(err);
    })
}

// creates group when user submits form from group creation page
createGroup = (req, res, next) => {
  let creator = 2;
  //let date = now();
  console.log("====================");
  console.log("req.body of createGroup:", req.body)
  console.log("====================");
  //console.log("req.user", req.user);
    db.none('insert into groups (group_name, total_members, creator, pay_in_amount, pay_out_amount, frequency, description_, date_created) values (${groupName}, ${totalMembers}, ${creator},${payinAmount}, ${payoutAmount}, ${frequency}, ${description}, clock_timestamp())',{
        groupName: req.body.groupName,
        totalMembers: req.body.totalMembers,
        creator: creator,
        payinAmount: req.body.payinAmount,
        payoutAmount: req.body.payoutAmount,
        frequency: req.body.frequency,
        description: req.body.description
    })
    .then((data) => {
      console.log("this is data from my group from db.none", data);
        res.status(200).json({
            status: "success",
            data: data,
            message: 'Created group!'
        });
    })
    .catch((err) => {
        return next(err);
    })
}

getGroupByName = (req, res, next) => {
  console.log("req.params of getGroupByName:",req.params);
  db.one('select * from groups where group_name = ${groupName}',
    {
      groupName: req.params.groupName
    }
  )
  .then((data) => {
    console.log("=== group by name: ", data);
      res.status(200).json({
          status: "success",
          data: data,
          message: 'Retrieved Group by name'
      });
  })
  .catch((err) => {
      return next(err);
      console.log(err);
  })
}


userJoinGroup = (req, res, next) => {
  //let userID = 4;
  //console.log("userJoinGroup ==> req.user.id", userID);
   db.none('insert into users_groups (user_id, group_id) values (${userID}, ${groupID})', {
      userID: req.params.userID,
      groupID: req.params.groupID,
   })
    .then((data) => {
        res.status(200).json({
            status: "success",
            data: data,
            messge: 'User joined group'
        })
    })
    .catch((err) => {
        return next(err);
    })
}

saveCustomerToken = (req, res, next) => {
    db.none('update users set stripe_id = ${stripe_id} WHERE email = ${email}', {
        stripe_id: req.query.stripe_id,
        email: req.query.email
    })
    .then((data) => {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'User token saved'
        })
    })
    .catch((err) => {
        return next(err);
    })
}

paymentSent = (req, res, next) => {

}

saveCustomerId = (data, id) => {
    db.none('update users set stripe_id = ${stripe_user_id} WHERE id = ${id}', {
        stripe_user_id: data,
        id: id
    })
    .then((data) => {
        console.log('SAVED CUSTOMER ID => ' + data);
    })
    .catch((err) => {
        console.log('YOU SUCK');
        return;
    })
}

getMembersFromGroup = (group_id) => {
    return (db.any('select * from users where group_id = ${group_id}', {
        group_id: group_id
    }))
    // .then((data) => {
    //     console.log('members data => ' + JSON.stringify(data));
    //     return data;
    // })
    // .catch((err) => {
    //     console.log('ERROR => ' + err);
    //     return;
    // })
}

getStripeAccounts = () => {
  return (db.any('select stripe_id from users '));
}

// getNumberOfPayments = (user, group) => {
//     console.log(typeof(group), typeof(user));
//     return (db.any('select * from paymentsin where group_id = ${group} and user_id = ${user}', {
//         user: user,
//         group: group,
//     }))
//     // .then((data) => {
//     //     res.status(200).json({
//     //         status: 'success',
//     //         data: data,
//     //         message: 'list of payments'
//     //     })
//     // })
//     // .catch((err) => {
//     //     console.log('number payments => ' + err);
//     //     return;
//     // })
// }

paymentsIn = (user, amount, group, charge_id) => {
    return (db.none('insert into payments_in (payment_id, amount, user_id, group_id) VALUES (${charge_id}, ${amount}, ${user}, ${group})', {
        charge_id: charge_id,
        group: group,
        user:user,
        amount: amount
    }));
    // .then((data) => {
    //     res.status(200).json({
    //         status: 'success',
    //         data: data,
    //         message: 'payment sent in'
    //     })
    // })
    // .catch((err) => {
    //     console.log(err);
    //     return;
    // })
}

paymentsOut = (user, amount, group, charge_id) => {
    return (db.none('insert into payments_out (payment_id, amount, user_id, group_id) VALUES (${charge_id}, ${amount}, ${user}, ${group})', {
        charge_id: charge_id,
        group: group,
        user:user,
        amount: amount
    }));
    // .then((data) => {
    //     res.status(200).json({
    //         status: 'success',
    //         data: data,
    //         message: 'payment sent out'
    //     })
    // })
    // .catch((err) => {
    //     console.log(err);
    //     return;
    // })
}

getGroup = (groupID) => {
    return (db.one('select * from groups where id = ${groupID}', {
        groupID: groupID
    }))
}



getAllGroups = (req, res, next) => {

  db.any('select * from groups inner join users on groups.creator = users.ID')
  .then((data) => {
    //console.log(data);
      res.status(200).json({
          status: 'success',
          data: data,
          message: 'Retrieved all creators'
      });
  })
  .catch((err) => {
    console.log(err)
      return next(err);
  })
}

checkGroupStatus = (req, res, next) => {
  db.any('select users_groups.group_id, count(*) as "currentMembers", groups.total_members as "maxMembers" from users_groups inner join groups on users_groups.group_id = groups.id where groups.id=${groupID} group by users_groups.group_id, groups.id', {
    groupID: req.params.groupID
  })
  .then((data) => {
    console.log(data[0].currentMembers);
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'got member count info for group'
    })
  })
  .catch((err) => {
    console.log("check status", err)
  });
}


getJason = (req, res, next) => {

    console.log(req.body.userID);
    let userID = 12
      db.one('select * from users inner join groups on groups.creator = ${userID} and users.id = ${userID}',{
        userID:req.params.userID
      })
      .then((data) => {
        console.log("DATA:=======================================> ", data);
        res.status(200).json({
            status: "success",
            data: data,
            message: 'Retrieved group info'
        });
      })
      .catch((err) => {
        console.log("ERROR:=====================================> ",err);
          return next(err);
      });
}

getMembers = (req, res, next) => {
  //let userID = req.user.id;
  //console.log("req.user.id from isMember", userID);

  return (db.any('select users_groups.user_id AS "groupMembers" FROM users_groups where group_id=${groupID}', {
    groupID: req.params.groupID
  }));
  // .then((data) => {
  //   res.status(200).json({
  //     status: 'success',
  //     data: data,
  //     message: "got all users from this group"
  //   });
  //   console.log("get members query: ", data);
  // })
  // .catch((err) => {
  //   console.log("isMember Error: ", err);
  // })
    /*
  db.any('select users_groups.user_id as "groupMembers", users_groups.group_id as "group" from users_groups where group_id=${groupID} group by group_id, users_groups.user_id', {
    groupID: req.params.groupID
    //userID: userID
  })*/
    /*
    if(data == undefined){
      res.status(200).json({
        status: 'success',
        result: false,
        message: 'This user is not a group member'
      })
    } else {
      res.status(200).json({
        status: 'success',
        result: true,
        data: data,
        message: 'This user is a group member'
      });
      //console.log(data);
    }
    */
}

module.exports = {
    getMembers: getMembers,
    checkGroupStatus: checkGroupStatus,
    getAllGroups: getAllGroups,
    getUserInfo: getUserInfo,
    getSingleGroup: getSingleGroup,
    getGroupByName: getGroupByName,
    createGroup: createGroup,
    createUser: createUser,
    loginUser: loginUser,
    getAllUsers:getAllUsers,
    saveCustomerId: saveCustomerId,
    userJoinGroup: userJoinGroup,
    getSingleUsers:getSingleUsers,
    getGroups:getGroups,
    getMembersFromGroup: getMembersFromGroup,
    // getNumberOfPayments: getNumberOfPayments,
    getGroup: getGroup,
    getSingleUsers:getSingleUsers,
    paymentsIn: paymentsIn,
    paymentsOut: paymentsOut,
    // getUserGroupInfo: getUserGroupInfo,
    // getAllCreatorsInfo: getAllCreatorsInfo,
    getJason:getJason,
    getStripeAccounts: getStripeAccounts,
};
