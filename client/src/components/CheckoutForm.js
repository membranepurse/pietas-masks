import React, { useState, useContext } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { ProductsContext } from '../Providers/example.provider'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createOrder } from '../actions/order';
import { createContact } from '../actions/contact';
import { v4 as uuidv4 } from 'uuid';


function CheckoutForm({history, createOrder, createContact }) {
  const { cart, calcTotal, clearCart } = useContext(ProductsContext)
  const stripe = useStripe();
  const elements = useElements();
  const total = calcTotal();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
    finalCart: cart,
    confirmation: uuidv4()
    });

  const { 
      fname,
      lname,
      email,
      address,
      address2,
      country,
      state,
      zip,
      finalCart,
      confirmation
  } = formData;

  const [contactData, setContactData] = useState([]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setContactData({ ...formData, [e.target.name]: e.target.value });

  }
  


  const sendData = (e) => {
    e.preventDefault();

    createOrder(formData)
    createContact(contactData)
    console.log('form sent')
    
  }

  const handleEmail = async (e) => {
    axios.post('http://localhost:5000/api/nodemailer', {
      fname,
      lname,
      email
    })
    .then( async function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    let token;

    axios.post('http://localhost:5000/api/stripe', {
      firstName: 'Fred',
      lastName: 'Flintstone',
      price: total,
      cart: cart
    })
    .then( async function (response) {
      token = response;
      console.log(token.data);
      console.log('token.data');
      console.log(token.data.clientSecret);
      const finalName = formData.fname + ' ' + formData.lname;
      const result = await stripe.confirmCardPayment(`${token.data.clientSecret}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: finalName
          },
        }
      });
  
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
        }
        clearCart();
        history.push('/');
      }


    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form onSubmit={(e) => {handleSubmit(e); sendData(e); }} className="needs-validation" noValidate>
        <div className="row">
          {/*
          <div className='form-group'>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
            />
            <small className='form-text'>
                First and last name
            </small>
          </div>
          */}
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              name='fname'
              value={fname}
              onChange={e => onChange(e)}
              required></input>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              name='lname'
              value={lname}
              onChange={e => onChange(e)}
              required></input>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            value={email}
            onChange={e => onChange(e)}
            placeholder="you@example.com"></input>
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            name='address'
            value={address}
            onChange={e => onChange(e)}
            required></input>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Apartment or suite"
            name='address2'
            value={address2}
            onChange={e => onChange(e)}
            ></input>
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select name='country' value={country} onChange={e => onChange(e)} className="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option value="United States">United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select name='state' value={state} onChange={e => onChange(e)} className="custom-select d-block w-100" id="state" required>
              <option value="">Choose...</option>
              <option value="California">California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder=""
              name='zip'
              value={zip}
              onChange={e => onChange(e)}

              required></input>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>

        </div>
        <hr className="mb-4"></hr>

        {/*
        Not sure what is sent
        
        */}
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address"></input>
          <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
        </div>
        <hr className="mb-4"></hr>
        <CardElement/>
        <hr className="mb-4"></hr>
        <button disabled={!stripe} className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
      </form>
    </div>
  );
}

{/*
    <form onSubmit={(e) => {handleSubmit(e); sendData(e);}}>
      <div className='form-group'>
        <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
        />
        <small className='form-text'>
            First and last name
        </small>
      </div>
      <div className='form-group'>
        <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
        />
        <small className='form-text'>
            Email
        </small>
      </div>
      



      <CardElement />
      <button disabled={!stripe}>Confirm order</button>
    </form>
*/}

CheckoutForm.propTypes = {
  createOrder: PropTypes.func.isRequired,
  createContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { createOrder, createContact }
)(CheckoutForm);