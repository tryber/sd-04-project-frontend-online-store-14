import React, { Component } from 'react';
import Carrinho from '../carrinho.png';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <a src={Carrinho} data-testid="shopping-cart-button" />
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default ShoppingCart;
