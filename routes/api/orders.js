var express = require('express')
var router = express.Router()
const axios = require('axios')
const Order = require('../../models/Order');

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find();
      if (!orders) throw Error('No orders');
  
      res.status(200).json(orders);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  /**
 * @route   POST api/orders
 * @desc    Create An Order
 * @access  Private
 */

router.post('/', async (req, res) => {
  const newOrder = new Order({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    address2: req.body.address2,
    country: req.body.country,
    state: req.body.state,
    zip: req.body.zip,
    cart: req.body.finalCart,
    confirmation: req.body.confirmation
  });

  axios.post('http://localhost:5000/api/nodemailer', {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      confirmation: req.body.confirmation
    })
    .then(res => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });

  {/*
      
  

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  */}



  try {
    const order = await newOrder.save();
    if (!order) throw Error('Something went wrong saving the item');

    res.status(200).json(order);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

  module.exports = router


  