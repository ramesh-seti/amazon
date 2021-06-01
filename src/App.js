import React,{useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{basket}, dispatch] = useStateValue();
  const [item, setItem] = useState([])
  useEffect(() => {
  auth.onAuthStateChanged(authUser =>{
    console.log('THE USER IS' >>> authUser );
    if (authUser) {
     // the user just logged in
     dispatch( {
       type: 'SET_USER',
       user: authUser
     });
    } else {
     // the user is logged out
     dispatch({
       type: 'SET_USER',
       user: null
     });
    }
  });
  }, []);
  //const [{ basket }, dispatch] = useStateValue();
  let cart = [];
  useEffect(() => {
  //  console.log(localStorage.getItem('cart'))
    SaveProductToBasket();
  
  },[basket])
  
  const SaveProductToBasket = () => {
    if (basket.length !== 0) {
      basket.map((item) => {
        cart.push(item)
      })
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  

  }
  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
      <Route path="/Login">
        <Login/>
        </Route>
      <Route path="/checkout">
      <Header/>
        <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
     <Home />
     </Route>
     </Switch>
     </div>
     </Router>
   
  );
}

export default App;
