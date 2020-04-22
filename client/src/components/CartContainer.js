import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Cart from './Cart'
import { ProductsContext } from '../Providers/example.provider'

const CartContainer = ({ history }) => {
const { increment, decrement, getItemCount, uniqueCart, cart, products, calcTotal, checkout, removeCart } = useContext(ProductsContext)
return (
    <div className="main-product" style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
        <Cart
            products={cart}
            uniqueCart={uniqueCart()}
            getItemCount={getItemCount}
            total={calcTotal()}
            increment={increment}
            decrement={decrement}
            onCheckoutClicked={() => checkout(cart, history)}
            />
    </div>
)}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

export default CartContainer
