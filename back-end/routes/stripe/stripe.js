const stripe = require('../../constants/stripe');
const authHelpers = require('../../auth/helpers');
const express = require('express');
const axios = require('axios');
const router = express.Router();

userRequired = (req, res, next) => {
    if(!req.isAuthenticated()) {
        console.log('Error at userRequired');
        // res.redirect('/users/login'); WHEN WE HAVE LOG IN PAGE
        res.status(401).send('not logged in lol');
        return;
    }
    next();
}
// This route should be attached to Stripe button to direct them to payment setup
router.get('/', userRequired, (req, res) => {
    req.user.state = Math.random().toString(36).slice(2);
    res.redirect(`${stripe.authorizeUri}?client_id=${stripe.clientID}&state=${req.session.state}`);
})

router.get('/token', userRequired, async (req, res) => {
    if(req.session.state !== req.query.state) {
        res.redirect('/users/login');
        return;
    }

    try {
        const axiosRes = await axios.post(stripe.tokenUri,{
            grant_type: 'authorization_code',
            client_id: stripe.clientID,
            client_secret: stripe.secretStripeKey,
            code: req.query.code
        });
        console.log(axiosRes);

    } catch (err){
        console.log(err);
        res.status(500).send('stripe error');
        return;
    }

    res.redirect('/users/login')
})

module.exports = router;
