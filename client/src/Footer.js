import React from 'react';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer>
       <div className="copyright blue">
          <div className="container">
             <div className="row cap">
               <div>
                  <p><img width="90" src="images/longhorn.png" alt="#" style={{marginTop: '-5px'}} /> All Rights Reserved. Pietas Solutions LLC © 2020</p>
               </div>
               <div>
                <ul className="footer">
                      <li className="footer-item">
                         <Link to="/">
                         <i className="fa fa-facebook" aria-hidden="true"></i>
                         </Link>
                      </li>
                      <li className="footer-item"> 
                         <Link to="/">
                         <i className="fa fa-twitter" aria-hidden="true"></i>
                         </Link>
                      </li>
                      <li className="footer-item">
                         <Link to="/">
                         <i className="fa fa-instagram" aria-hidden="true"></i>
                         </Link>
                      </li>
                      <li className="footer-item">
                         <Link to="/">
                         <i className="fa fa-linkedin" aria-hidden="true"></i>
                         </Link>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </footer>
  );
}

/*
  <footer>
       <div className="copyright">
          <div className="container">
             <div className="row">
                <div className="col-md-8">
                <ul className="footer">
                      <li>
                         <a href="">
                         <i className="fa fa-facebook" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="">
                         <i className="fa fa-twitter" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="">
                         <i className="fa fa-instagram" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="#">
                         <i className="fa fa-linkedin" aria-hidden="true"></i>
                         </a>
                      </li>
                   </ul>
                   <p><img width="90" src="images/logo.png" alt="#" style={{marginTop: '-5px'}} /> All Rights Reserved. Company Name © 2018</p>
                </div>
                <div className="col-md-4">
                   <ul className="footer">
                      <li>
                         <a href="">
                         <i className="fa fa-facebook" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="">
                         <i className="fa fa-twitter" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="">
                         <i className="fa fa-instagram" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a href="#">
                         <i className="fa fa-linkedin" aria-hidden="true"></i>
                         </a>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </footer>
*/



export default Footer;
