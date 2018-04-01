var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/sousou";
var db = pgp(connectionString);

module.exports = db;
