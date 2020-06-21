import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          to={{ pathname: '/produto_detalhado', state: { props: this.props } }}
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}
