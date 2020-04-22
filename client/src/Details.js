import React, { useState, useContext } from 'react';
import {ProductsContext} from './Providers/example.provider'

function Details({ match }) {
  const { getProd } = useContext(ProductsContext)
  const product = getProd(match.params.id)
  console.log(product.img);
  const fix = "/" + product.img 
  console.log(fix);



  return (
    <div className="main-product head-t container">
      <div className="row">
        <h1 className="details-top col-10 mx-auto text-center text-slanted text-blue my-5">{product.title}</h1>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img className="details-img img-fluid" src={fix} className="img-fluid" alt="fuck" />
        </div>
        <div className="right-details col-10 mx-auto col-md-6 my-3">
          <h2 className="details-main">Model : Samsung S7</h2>
          <h2 className="details-price font-weight-bold">Price : ${product.price}</h2>
          <p className="details-p lead">Some Info About Product : Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics, DIY Coloring Book Mixtape Craft Beer Sartorial Hella Blue Bottle. Tote Bag Wolf Authentic Try-Hard Put A Bird On It Mumblecore. Unicorn Lumbersexual Master Cleanse Blog Hella VHS, Vaporware Sartorial Church-Key Cardigan Single-Origin Coffee Lo-Fi Organic Asymmetrical. Taxidermy Semiotics Celiac Stumptown Scenester Normcore, Ethical Helvetica Photo Booth Gentrify.</p>
          <div>
            <button className="details-btn">Back To Products</button>
            <button className="details-add-btn">Add To Cart</button>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Details;
