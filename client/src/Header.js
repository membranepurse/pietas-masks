import React, { useState, useContext } from 'react';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   NavbarText
 } from 'reactstrap';
 import {ProductsContext} from './Providers/example.provider'

function Header() {
   const { itemTotal, calcTotal } = useContext(ProductsContext)

   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

   const price = calcTotal()
   const cartTotal = itemTotal()

  return (
     <header>
       <Navbar color="light" fixed="top" light expand="md" style={{marginBottom: '50px'}}>
        <NavbarBrand href="/"><img src="images/longhorn.png" alt="#" style={{marginTop: '-5px'}} />Pietas Masks</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cart">Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="basic-margins"><i className="fas fa-shopping-cart"></i>{cartTotal} </NavbarText>
          <NavbarText  className="basic-margins">${price}</NavbarText>

        </Collapse>
      </Navbar>   
     </header>
  

    /*
     <header id="header" class="top-head">
       <nav class="navbar navbar-default">
          <div class="container-fluid">
             <div class="row">
                <div class="col-md-4 col-sm-12 left-rs">
                   <div class="navbar-header">
                      <a href="/" class="navbar-brand"><img src="images/logo.png" alt="" /></a>
                   </div>
                </div>
                <div class="col-md-8 col-sm-12">
                   <div class="right-nav">
                      <div class="login-sr">
                         <div class="login-signup">
                            <ul>
                               <li><a href="#">Login</a></li>
                               <li><a class="custom-b" href="#">Sign up</a></li>
                            </ul>
                         </div>
                      </div>
                      <div class="help-r hidden-xs">
                         <div class="help-box">
                            <ul>
                               <li> <a href="/cart"> <span>Cart</span> <img src="images/flag.png" alt="" /> </a> </li>
                               <li> <a href="#"><img class="h-i" src="images/help-icon.png" alt="" /> Help </a> </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </nav>
    </header>
   */
  );
}

export default Header;
