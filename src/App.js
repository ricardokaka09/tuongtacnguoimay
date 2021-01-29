import React,{useEffect} from 'react';
import './App.css';
import Header from './component/header/Header'
import Home from './component/home/Home'
import LoginUi from './component/login/LoginUi'
import Checkout from './component/checkout/Checkout'
import Menu from './component/menu/Menu'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import Payment from './component/payment/Payment';
import PaymentAddress from './component/payment/PaymentAddress';
import { loadStripe } from '@stripe/stripe-js'
import { Element, Elements } from '@stripe/react-stripe-js'
import {abc } from './js/script'
import Footer from './component/footer/Footer';
import Account from './component/account/Account';
import ProductDetail from './component/home/product/ProductDetail';
import {connect, Provider} from 'react-redux'
import store  from './store'
import SignUp  from './component/login/Register';
import UploadProduct from './component/upload/UploadProduct';
import { loadUser } from './actions/auth';
import { getPostDB } from './actions/post';
import CheckoutProduct from './component/checkout/CheckoutProduct';
import { getBasket } from './actions/basket';
import Blog from './component/blog/Blog';
import Shop from './component/shop/Shop';
import Contact from './component/contact/Contact';

const promise = loadStripe('pk_test_51HU6b6BMQST2LLkiY4RQEaixDydyXY9GtxSDOsRwd4VCwqTmcJIuyskCl5fG8pY3wy8XbrVbK6kCcGVfSh5lalys00Eii4QXTx');


function App() {
  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(getPostDB())
    store.dispatch(getBasket())
  },[]);
  return (
    <Provider store={store}>
    <Router>
      <div className="app">
        <Header/>
        {/* trang home phair dua den cuoi cung*/}
          <Switch>
            {/* <Route path='/register'>
              <Register/>
            </Route> */}
            <Route path='/login'>
              <LoginUi/>
            </Route>
            <Route path='/signUp'>
              <SignUp/>
            </Route>
            <Route path='/admin/upload'>
              <UploadProduct />
            </Route>
            <Route path='/profile'>
              <Account/>
            </Route>
            <Route path='/shop'>
              <Shop/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Route path='/productDetail'>
              <ProductDetail/>
            </Route>
            <Route path='/productDetail/:id'>
              <ProductDetail/>
            </Route>
            <Route path='/checkoutProduct/'>
              <CheckoutProduct/>
            </Route>
            <Route path='/paymentAddress'>
              <PaymentAddress/>
            </Route>
            <Route path='/payment'>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path='/paymentSuccess'>
              <h2>Payment Success</h2>
            </Route>
            <Route path='/checkout'>
              <Checkout/>
            </Route>
            <Route path='/blog'>
              <Blog/>
            </Route>
            <Route path='/'>
              {/* <Menu/> */}
              <Home/>
            </Route>
          </Switch>
          <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
