import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Conteudo from './componentes/Conteudo';
import Carrinho from '../carrinho.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="cards">
          <img src={Carrinho} data-testid="shopping-cart-button" alt="Carrinho" />
        </Link>
        <Conteudo />
      </div>
    );
  }
}
