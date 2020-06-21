import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Conteudo from './componentes/Conteudo';

import Carrinho from '../carrinho.png';
import Conteudo from './componentes/Conteudo';

export default class Home extends Component {
  render() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link to="cads">
          <img src={Carrinho} data-testid="shopping-cart-button" alt="Carrinho" />
        </Link>
      </h1>
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Conteudo />
      </div>
    );
  }
}
