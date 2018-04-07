let db = require('../db/queries');
let stripe = require('../constants/stripe');
let express = require('express');
let axios = require('axios');
let charge = require('./stripe/charge');
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");
let router = express.Router();


//localhost:3100/groups
router.get('/',  db.getAllGroups);


//localhost:3100/groups/new
router.post('/new', db.createGroup);

//localhost:3100/groups/groupID
router.get('/:groupID', db.getSingleGroup);

//localhost:3100/groups/:groupID/join/:userID
//Join Group
router.post('/:groupID/join/:userID', db.userJoinGroup);

router.post('/:groupID/charge', charge.makeCharge);

module.exports = router;
