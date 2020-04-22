import React from 'react';

function About() {
  return (
    <div className="main-product" style={{marginTop: '75px'}}>
        <div className="row">
            <h1 className="details-top col-10 mx-auto text-center text-slanted text-blue my-5">About Us</h1>
        </div>
        <div className="right-details col-10 mx-auto col-md-6 my-3">
            <img src="/img/mask.png" alt="idk"></img>
            <p className="details-p lead" style={{marginTop: '15px'}}>
                The worldwide spread of COVID-19 has disrupted the worldwide supply chain, making difficult for the everyday American to get protected themselves. Here at Pietas we take pride in doing our share to make a better future. We work endlessly to produce to most innovative designs. Contact us if you have any questions or suggestions!
            </p>

        </div>

    </div>
  );
}

export default About;