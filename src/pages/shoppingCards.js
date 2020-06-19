import React, { Component } from 'react';
import Carrinho from '../carrinho.png';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <button type="button" src={Carrinho} data-testid="shopping-cart-button" alt="Carrinho" />
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default ShoppingCart;
