import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProdutoDetalhado extends Component {
  render() {
    const { id, titulo, foto, preco, quantidadeEstoque } = this.props.location.state.props;
    return (
      <div style={{ border: '1px solid black', borderRadius: '5px' }}>
        <h1>Produto detalhado</h1>
        <p data-testid="product-detail-name">{titulo}</p>
        <img src={foto} alt="Produto detalhado" />
        <p>{preco}</p>
        <Link
          to={{ pathname: '/carrinho_datalhado', state: { id, titulo, quantidadeEstoque } }}
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </Link>
        <form>
          <label htmlFor="oi" id="oi">
            Avaliação
          </label>
          <br />
          <textarea data-testid="product-detail-evaluation" rows="5" cols="40" />
        </form>
      </div>
    );
  }
}
