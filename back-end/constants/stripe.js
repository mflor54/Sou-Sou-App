const configureStripe = require('stripe');

const StripeTestKey = 'pk_test_5FJ5oqBHfFyaulWqsVd5EE6n'

const stripe = (configureStripe)(StripeTestKey);

const clientID = 'ca_CVhEpQWC0LK4Nwm9RBwKkYWelVVB32Ls'

const authorizeUri = 'https://connect.stripe.com/express/oauth/authorize'

module.exports = {
    stripe: stripe,
    authorizeUri: authorizeUri,
    clientID: clientID,
}