const passport = require("passport");
const db = require("../db/index");

module.exports = () => {
  // store the username on the session
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  // get user info from session
  passport.deserializeUser((username, done) => {
    console.log("desirealize");
    db
      .one("SELECT * FROM users WHERE username=$1", [username])
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
