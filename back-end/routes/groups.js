let db = require('../db/queries');
let express = require('express');
let router = express.Router();


//localhost:3100/groups
router.get('/', db.getAllGroups);

//localhost:3100/groups/new
router.post('/new', db.createGroup);

module.exports = router;
