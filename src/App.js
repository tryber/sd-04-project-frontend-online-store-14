import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home';
import ShoppingCart from './pages/shoppingCards';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cads" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
