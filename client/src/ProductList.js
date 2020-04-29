import React, { useContext, useState } from 'react'
import PRODUCTS_DATA from './products'
import { Link } from 'react-router-dom'
import {ProductsContext} from './Providers/example.provider'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ProductList() {
   const { openModal, modal, cartTax, cart, products, addCart, clearCart, showCart } = useContext(ProductsContext)
   const data = PRODUCTS_DATA;

   
  return (
   <div className="row clearfix">
      {products.map(product =>
         <div key={product.id} className="col-lg-3 col-sm-6 col-md-3">
            <div className="box-img round">
            <h4>{product.title}</h4>
            <Link to={`/details/${product.id}`}><img src={product.img} alt="" ></img></Link>
               <div className="price-bar" style={{display: "flex", flexDirection:"column", justifyContent: 'center'}}>
                  <h3 className="white">${product.price}</h3>
                  <Button className="btn-hover" color="primary" onClick={() => {
                     addCart(product.id);
                     openModal(product.id)
                  }}>Add</Button>
               </div>
            </div>
         </div>
       )}
   </div>
  );
}

export default ProductList;
