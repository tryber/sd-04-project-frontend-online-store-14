import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Produto extends Component {
  render() {
    const { id, titulo, foto, preco, quantidadeEstoque } = this.props;
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
        </Link><br />
        <Link
          to={{ pathname: '/carrinho_datalhado', state: { id, titulo, quantidadeEstoque } }}
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </Link>
      </div>
    );
  }
}
