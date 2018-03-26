let db = require('../db/queries');
let stripe = require('../constants/stripe');
let express = require('express');
let router = express.Router();


//localhost:3100/groups
router.get('/', db.getAllGroups);

//localhost:3100/groups/new
router.post('/new', db.createGroup);

router.post('/:id/charge', async (req, res, next) => {
    const charge = await stripe.charges.create({
        amount: req.amount,
        curreny: "usd",
        source: null,
        destination: {
            account: ""
        }
    })
})

module.exports = router;
