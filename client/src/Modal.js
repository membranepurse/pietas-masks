import React, {useContext} from 'react';
import {ProductsContext} from './Providers/example.provider'
import PRODUCT_DATA from './Providers/products'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
function Modal() {
    const data = PRODUCT_DATA;
    const { currProduct, modal, openModal, closeModal } = useContext(ProductsContext)
    console.log(currProduct);
    

    return (
    <div>
      {
          modal && 
          <div className="modal-container">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                      style={{background: 'white'}}
                    >
                      <h5>item added to cart</h5>
                      <img src={data[currProduct].img} className="img-fluid" alt="" />
                      <h5>{data[currProduct].title}</h5>
                      <h5 className="text-muted">price : ${data[0].price}</h5>
                      <div className="column padding">
                          <Button onClick={closeModal}>Continue Shopping</Button>
                          <Button onClick={closeModal} tag={Link} to="/cart" className="mg-basic">
                            Cart
                          </Button>
                      </div>
                    </div>
                  </div>
                </div>              
          </div>

      }
    </div>
  );
}

export default Modal;
