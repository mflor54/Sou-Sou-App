const db = require('../db/queries');
var express = require('express');
const stripe = require('../constants/stripe');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");
const charge = require('../routes/stripe/charge');


//localhost:3100/profile
router.get('/',  db.getAllUsers);

//Jason
router.get('/:userID',  db.getJason);

//send payment
router.post('/:userID/charge', charge.makeCharge);

module.exports = router;
