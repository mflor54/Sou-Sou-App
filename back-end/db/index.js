var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/SouSou";
var db = pgp(connectionString);

module.exports = db;
