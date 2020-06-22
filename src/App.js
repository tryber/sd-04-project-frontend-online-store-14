import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home';
import ProdutoDetalhado from './pages/componentes/ProdutoDetalhado';
import ShoppingCart from './pages/componentes/CarrinhoDeCompras';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/produto_detalhado" component={ProdutoDetalhado} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
