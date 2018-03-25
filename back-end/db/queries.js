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
  })
    .catch(err => {
      console.log('Create User Error: ',err);
      res.status(500).send('error creating user')
    })
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

//User logout
logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("User logout")
}

// get user info for their profile page when they log in or during session
getUserInfo = (req, res, next) => {
    db.any('select * from users where username = ${username}')
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
    db.one('select group_name, rating, payout, frequency, description from groups where group_name=${group_name}',
        {
            group_name: req.body.group_name
        }
    )
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrieved group info'
        });
    })
    .catch((err) => {
        return next(err);
    })
}
// creates group when user submits form from group creation page
createGroup = (req, res, next) => {
    db.none('insert into groups (group_name, total_members, creator, payout, frequency, description, rating) values (${group_name}, ${total_members}, ${user_name}, ${payout}, ${frequency}, ${description}, ${rating})',{
        group_name: req.body.group_name,
        total_members: req.body.total_members,
        user_name: req.body.user_name,
        payout: req.body.payout,
        frequency: req.body.frequency,
        description: req.body.description,
        rating: req.body.rating
    })
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Created group!'
        });
    })
    .catch((err) => {
        return next(err);
    })
}

userJoinGroup = (req, res, next) => {
    db.none('update users set group_id = groups.id from groups where users.id = ${user_id} AND groups.id = ${group_id}', {
        group_id: groupd_id,
        user_id: user_id
    })
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            messge: 'User joined group'
        })
    })
    .catch((err) => {
        return next(err);
    })
}


module.exports = {
    getAllGroups: getAllGroups,
    getUserInfo: getUserInfo,
    getSingleGroup: getSingleGroup,
    createGroup: createGroup,
    createUser: createUser,
    loginUser: loginUser,
    getAllUsers:getAllUsers
};