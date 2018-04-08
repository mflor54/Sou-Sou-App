const stripe = require('../../constants/stripe');
const authHelpers = require('../../auth/helpers');
const db = require('../../db/queries');
const express = require('express');
const axios = require('axios');
const router = express.Router();

userRequired = (req, res, next) => {
    console.log('USER RQ')
    if(!req.isAuthenticated()) {
        console.log('Error at userRequired, file: stripe.js');
        // res.redirect('/users/login'); WHEN WE HAVE LOG IN PAGE
        res.status(401).send('not logged in lol');
        return;
    }
    next();
}
router.get('/', (req, res) => {
    ('this is stripe route');
});

// This route should be attached to Stripe button to direct them to payment setup
router.get('/connect', userRequired, (req, res) => {
    console.log('Route is /AUTHORIZE')
    console.log('REQ USER IS ' + req.user.email);
    req.user.state = Math.random().toString(36).slice(2);
    console.log(req.user.state);
    res.redirect(`${stripe.authorizeUri}?client_id=${stripe.clientID}&state=${req.user.state}&stripe_user[email]=${req.user.email}`);
})

router.get('/token', userRequired, async (req, res) => {
    const param = req.url;
    const regex = /state=([^]+)/;
    const val = param.match(regex);
    if(val[1] !== req.query.state) {
        res.redirect('http://localhost:3000/users/login');
        return;
    }
    
    try {
        const axiosRes = await axios.post(stripe.tokenUri,{
            grant_type: 'authorization_code',
            client_id: stripe.clientID,
            client_secret: stripe.secretStripeKey,
            code: req.query.code
        });
        console.log('This is axiosRes => ' + axiosRes);
        // res.send(axiosRes.data);
        // res.send(req.user);
        db.saveCustomerId(axiosRes.data.stripe_user_id, req.user.id);
        
    } catch (err){
        console.log(err);
        res.status(500).send('stripe error');
        return;
    }

    res.redirect('http://localhost:3000/groups')
})



module.exports = router;
