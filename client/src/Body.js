import React, { useContext } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import CartContainer from './components/CartContainer'
import {Button} from 'reactstrap'
import {ProductsContext} from './Providers/example.provider'
import Alerter from './components/Alerter'
function Body() {
   const { clearCart } = useContext(ProductsContext)

  return (
    <div>
      <div className="page-content-product">
         <div className="main-product" style={{marginTop: '50px'}}> 
            <div className="container">

               <div className="row clearfix">
                  
                  <div className="find-box">
                     <Alerter/>
                     <h1 className="black">Protect yourself<br></br> and your family.</h1>
                     <h4 className="black">  With the toughest, safest masks around.</h4>
                     
                     {/*
                     <div className="product-sh">
                        <div className="col-sm-6">
                              <div className="form-sh">
                                 <input type="text" placeholder="Search something you love" ></input>
                              </div>
                           </div>
                           <div className="col-sm-3">
                              <div className="form-sh">
                                 <select className="selectpicker">
                                    <option>Textiles</option>
                                    <option>Furniture</option>
                                    <option>Leather</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-sm-3">
                              <div className="form-sh"> <a className="btn" href="#">Search</a> </div>
                           </div>
                        <p>Or simply<a href="#"> click here </a> and get inspired!</p>
                     </div>
                     
                     */}
                  </div>
               </div>

{/*

*/}
               <ProductList />
               <div className="center">
                  <Button outline color="primary" size="lg" onClick={clearCart}>
                     Clear Cart
                  </Button>
               </div>

            </div>
         </div>
      </div>

      <div className="cat-main-box">
         <div className="container">
            <div className="row panel-row">
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.0s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="images/xpann-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Protect Your Business</h4>
                        <p>With our COVID-19 masks, your employees could safely return back to work</p> 
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="images/create-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Minimize your exposure</h4>
                        <p>Wearing our max in combination with the CDCs rules of social-distancing is proven to minimize your risk of exposure
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn hidden-sm" data-wow-delay="0.4s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="images/get-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Flexability</h4>
                        <p>Our selection is diverse. We prioritize airflow while maintaining proper insulation
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


{/*
  <Cart
    products={cart}
    total={calcTotal()}
    onCheckoutClicked={() => checkout(products)} />
*/}

{/*
   <CartContainer />
*/}
   </div>
  );
}

export default Body;
