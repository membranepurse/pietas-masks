import React, { useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_lpCVgIXHX8XS7WLPw0lwGa6g00OnAxDGFz');

const Checkout = ({ history }) => {
  const selectedProduct = "hanky"
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main-product" style={{marginTop: '75px', padding: '50px'}}>
      <Elements stripe={stripePromise}>
        <CheckoutForm history={history} selectedProduct={selectedProduct} history={history} />
      </Elements>
    </div>
  )
}

export default Checkout;