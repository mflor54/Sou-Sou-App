const configureStripe = require('stripe');

const StripeTestKey = 'pk_test_5FJ5oqBHfFyaulWqsVd5EE6n';

const secretStripeKey = 'sk_test_zqwRU3XilPXi20sK7XSC5B6z';

const stripe = (configureStripe)(StripeTestKey);

const stripeCharge = (configureStripe)(secretStripeKey);

const clientID = 'ca_CVhEzMTBcVYxwt706tld9qDkYrPlxqSb';

const authorizeUri = 'https://connect.stripe.com/express/oauth/authorize';

const tokenUri = 'https://connect.stripe.com/oauth/token'

module.exports = {
    stripe: stripe,
    authorizeUri: authorizeUri,
    clientID: clientID,
    secretStripeKey, secretStripeKey,
    tokenUri: tokenUri,
    stripeCharge: stripeCharge,
}