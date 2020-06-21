import React, { Component } from 'react';

export default class Produto_Detalhado extends Component {
  render() {
    const { titulo, foto, preco } = this.props.location.state.props;
    return (
      <div style={{ border: '1px solid black', borderRadius: '5px' }}>
        <h1>Produto detalhado</h1>
        <p data-testid="product-detail-name">{titulo}</p>
        <img src={foto} alt="Produto_detalhado" />
        <p>{preco}</p>
      </div>
    );
  }
}
