var express = require('express')
var router = express.Router()

const stripe = require('stripe')('sk_test_KhYsgDEVe1eFIy7bVGa6H8on00blS66B5B');

router.post('/', async function(req, res) {
    console.log(req.body.price)
    const rounded = Math.round(req.body.price * 100)
    console.log(rounded)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: rounded,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });
  
    res.send({
        publishableKey: 'pk_test_lpCVgIXHX8XS7WLPw0lwGa6g00OnAxDGFz',
        clientSecret: paymentIntent.client_secret
    })
  })

router.get('/', function(req, res) {
    console.log('got');
    res.send('got');
});

router.get('/f', function(req, res) {
  console.log('got');
  res.send('got');
});

  

module.exports = router
