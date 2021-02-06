import React , {useEffect} from "react";
import Home from "./Home/Home";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Signin from "./Signin/Signin";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./Orders/Orders";

const promise = loadStripe('pk_test_51IH9tHG8sk3O22VDRhFdv9ZCfcFcr1YE6vJoZ6WySvw852lD9uyzRuzdrEyeh6IptEuhSW61CHsNmIalhzX85ezR007JUHSque')



function App() {
  const [{ }, dispatch] = useStateValue();
  
  useEffect(() => {
  //will work when the comp loads ...
  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);
    if (authUser) {
      // the user just logged in / the user was logged in
    dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  })
}, [])
  
  
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
