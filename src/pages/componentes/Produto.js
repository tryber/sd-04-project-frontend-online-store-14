import React, { Component } from 'react';

export default class Produto extends Component {
  render() {
    return (
      <div />
    const { titulo, foto, preco } = this.props;
    return (
      <div style={{ border: '1px solid black', borderRadius: '5px' }} data-testid="product">
        <p>{titulo}</p>
        <img src={foto} alt="Produto" />
        <p>{preco}</p>
      </div>
    );
  }
}
