var express = require('express')
var router = express.Router()
const Contact = require('../../models/ContactList');

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', async (req, res) => {
    try {
      const contacts = await Contact.find();
      if (!contacts) throw Error('No contacts');
  
      res.status(200).json(contacts);
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
  const newContact = new Contact({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    address2: req.body.address2,
    country: req.body.country,
    state: req.body.state,
    zip: req.body.zip,
  });



  try {
    const contact = await newContact.save();
    if (!contact) throw Error('Something went wrong saving the item');

    res.status(200).json(contact);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

  module.exports = router


  