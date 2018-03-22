const stripe = require('../../constants/stripe');
const authHelpers = require('../../auth/helpers');
const express = require('express');
const router = express.Router();

userRequired = (req, res, next) => {
    if(!req.isAuthenticated()) {
        console.log('Error at userRequired');
        res.redirect('/users/login');
    }
    next();    
}

router.get('/', userRequired, (req, res) => {
    req.session.state = Math.random().toString(36).slice(2);

    res.redirect(`${stripe.authorizeUri}?client_id=${stripe.clientID}&${req.session.state}`);
})

module.exports = router;