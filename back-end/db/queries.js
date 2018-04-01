const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

// Query to get all groups for public groups page, map in the front-end
getAllGroups = (req, res, next) => {

    db.any('SELECT * FROM groups')
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
          console.log(res.status);
          res.status(200).send(user);
          // res.redirect('/users/profile');
        }
      })
    }
  })
  return authenticate(req, res, next)
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
    loginUser()
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

// get user info for their profile page when they log in or during session
getUserInfo = (req, res, next) => {
    db.any('select * from users where username = ${userName}')
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrived User info'
        });
    })
    .catch((err) => {
        return next(err);
    });
}


// select one group from groups list page from front-end(list provided by getAllGroups)
getSingleGroup = (req, res, next) => {
    db.one('select * from groups where groups.ID=${groupId}',
        {
            groupId: req.params.groupID
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
    db.none('insert into groups (group_name, total_members, creator, pay_in_amount, pay_out_amount, frequency, description_) values (${groupName}, ${totalMembers}, ${creator},${payinAmount}, ${payoutAmount}, ${frequency}, ${description})',{
        groupName: req.body.groupName,
        totalMembers: req.body.totalMembers,
        creator: req.body.creator,
        payinAmount: req.body.payinAmount,
        payoutAmount: req.body.payoutAmount,
        frequency: req.body.frequency,
        description: req.body.description
    })
    .then((data) => {
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

userJoinGroup = (req, res, next) => {
  //Needs updating when needs are clearified
  /*
    db.none('update groups where group.ID = ${groupId} from groups where users.id = ${user_id} AND groups.id = ${group_id}', {
        group_id: group.ID,
        user_id: user_id
    })
    */
   console.log(req.body)
  //  let groupID = 1;
  //  let userID = 2;
   db.none('insert into users_groups (group_id, user_id) values (${groupID}, ${userID})', {
      groupID: req.body.groupID,
      userID: req.body.userID
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
    db.none()
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


module.exports = {
    getAllGroups: getAllGroups,
    getUserInfo: getUserInfo,
    getSingleGroup: getSingleGroup,
    createGroup: createGroup,
    createUser: createUser,
    loginUser: loginUser,
    getAllUsers:getAllUsers,
    saveCustomerId: saveCustomerId,
    userJoinGroup: userJoinGroup
};