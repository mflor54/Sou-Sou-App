const stripe = require('../../constants/stripe');
const authHelpers = require('../../auth/helpers');
const express = require('express');
const axios = require('axios');
const router = express.Router();

userRequired = (req, res, next) => {
    if(!req.isAuthenticated()) {
        console.log('Error at userRequired');
        res.redirect('/users/login');
    }
    next();    
}
// This route should be attached to Stripe button to direct them to payment setup
router.get('/', userRequired, (req, res) => {
    req.session.state = Math.random().toString(36).slice(2);

    res.redirect(`${stripe.authorizeUri}?client_id=${stripe.clientID}&state=${req.session.state}`);
})

router.get('/token', userRequired, (req, res) => {
    if(req.session.state !== req.query.state) {
        res.redirect('/users/login');
    }

    axios.post(stripe.tokenUri,{
        grant_type: 'authorization_code',
        client_id: stripe.clientID,
        client_secret: stripe.secretStripeKey,
        code: req.query.code
    })
    .then((res) => {
        console.log(res);
        console.log(req.user.stripeAccountId);
    })
    .catch((err) => {
        console.log(err);
    })

    res.redirect('/users/login')
})

module.exports = router;