const configureStripe = require('stripe');

const StripeTestKey = 'pk_test_5FJ5oqBHfFyaulWqsVd5EE6n'

const stripe = (configureStripe)(StripeTestKey);

module.exports = stripe;