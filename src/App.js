import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home';
import ProdutoDetalhado from './pages/componentes/ProdutoDetalhado';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/produto_detalhado" component={ProdutoDetalhado} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
