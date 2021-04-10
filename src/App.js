

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
         <Route path="/login">
         <Header />
           <h3>
             Login
           </h3>
         </Route>
         
         <Route path="/checkout">
         <Header />
           <h3>
             Checkout
           </h3>
           <Checkout />
         </Route>
         
         <Route path="/">
           <Header />
           <Home />
           
         </Route>
      </Switch>
    </div>  
    </Router>
     
  ); 
}

export default App;
