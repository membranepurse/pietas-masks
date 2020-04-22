import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Details from './Details';
import About from './About';
import { createBrowserHistory } from 'history';
import CartContainer from './components/CartContainer';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Default from "./components/Default";
import Checkout from "./components/Checkout";
import store from './store';
import ProductsProvider from './Providers/example.provider';
import { Provider } from 'react-redux';
import Modal from './Modal';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Header/>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/cart" history={history} component={CartContainer} />
            <Route exact path='/details/:id' component={Details} />
            <Route exact path="/about" component={About} />
            <Route exact path="/checkout" history={history} component={Checkout}/>
            <Route component={Default} />
          </Switch>
          <Modal/>
          <Footer/>

        </Router>
    </Provider>

  );
}

export default App;
