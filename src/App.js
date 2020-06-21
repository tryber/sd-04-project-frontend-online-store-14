import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home';
import Produto_Detalhado from './pages/componentes/Produto_Detalhado';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/produto_detalhado" component={Produto_Detalhado} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
