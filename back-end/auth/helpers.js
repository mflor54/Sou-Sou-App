const bcrypt = require("bcryptjs");
const db = require("../db/index");

// Compare userPassword from the request to databasePassword from the database
function comparePass(userPassword, databasePassword) {
  // databasePassword has hash and salt
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none('INSERT INTO users (username, password_digest) VALUES (${username}, ${password})', { username: req.body.username, password: hash });
}
function loginRequired(req, res, next) {
  // if the user is logged in, passport will have attached
  // the user to it
  if (!req.user) {
    res.status(401).json({ status: "Please log in" });
    return;
  }
  next();
}

module.exports = {
  comparePass,
  createUser,
  createHash,
  loginRequired
};
