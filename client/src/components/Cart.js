import React, { useContext } from 'react';
import { ProductsContext } from '../Providers/example.provider'
import { Button } from 'reactstrap'


function Cart({ increment, decrement, getItemCount, uniqueCart, products, total, onCheckoutClicked }) {
  const { removeCart } = useContext(ProductsContext)
    const hasProducts = products.length > 0
    {/*
    
      const nodes = hasProducts ? (
      uniqueCart.map(product =>
        <div key={product.id}>
            <img src={product.img} alt="" ></img>
            {product.title} - 
            <button onClick={decrement(product.id)}>-</button>
            {getItemCount(product.id)}
            <button onClick={increment(product.id)}>+</button>
             - &#36;{product.price}{product.quantity ? ` x ${product.quantity}` : null}
            <button onClick={() => removeCart(product.id)}>Remove</button>
        </div>
      )
    ) : (
      <em>Please add some products to cart.</em>
    )
    
    */}
    


    return (
    <div className="cart">
        <div style={{marginTop: '50px'}}>
        <div className="row">
          <h1 className="details-top col-10 mx-auto text-center text-slanted text-blue my-5">Your Cart</h1>
        </div>
          { 
          hasProducts ? (
            uniqueCart.map(product =>
              <div  className="cart-details black" key={product.id}>
                  <img style={{width: '10em', height: '10em'}} src={product.img} alt="" ></img>
                  {product.title}
                  <button className="button " onClick={() => decrement(product.uuid)}><i class="fas fa-minus"></i></button>
                  {getItemCount(product.id)}
                  <button className="button " onClick={() => increment(product.id)}><i class="fas fa-plus"></i></button>
                  &#36;{product.price}{product.quantity ? ` x ${product.quantity}` : null}
                  <button onClick={() => removeCart(product.id)}>Remove</button>
              </div>
            )
          ) : (
            <em>Please add some products to cart.</em>
          )}
          </div>
        <hr style={{color: 'white'}}></hr>
        <div className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'flexEnd !important'}}>
          <p className="alignRight price black" style={{float: 'right', textAlign: 'right !important'}}>Total: &#36;{total}</p>
        </div>
        <Button color="primary" size="lg" style={{ float:'right'}} onClick={onCheckoutClicked} disabled={hasProducts ? '' : 'disabled'}>Checkout</Button>

    </div>
  );
}

{/*
  <Cart
    products={cart}
    total={calcTotal()}
    onCheckoutClicked={() => checkout(products)} />
*/}

export default Cart;
