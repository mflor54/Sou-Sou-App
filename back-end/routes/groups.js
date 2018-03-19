let db = require('../db/queries');
let express = require('express');
let router = express.Router();

router.get('/', db.getAllGroups);

router.post('/new', db.createGroup);

module.exports = router;