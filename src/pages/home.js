import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Carrinho from './carrinho.png';

export default class Home extends Component {
  render() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link to="cads">
          <img src={Carrinho} data-testid="shopping-cart-button" />
        </Link>
      </h1>
    );
  }
}
