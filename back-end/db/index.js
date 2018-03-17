var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/userlist";
var db = pgp(connectionString);

module.exports = db;