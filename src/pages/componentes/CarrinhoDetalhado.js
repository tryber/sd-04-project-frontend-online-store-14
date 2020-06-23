import React, { Component } from 'react';

export default class CarrinhoDetalhado extends Component {
  render() {
    const { id, titulo, quantidadeEstoque } = this.props.location.state;
    sessionStorage.setItem(id, JSON.stringify(titulo));
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <p data-testid="shopping-cart-product-quantity">
          Itens no carrinho: {sessionStorage.length}
        </p>
        {Object.keys(sessionStorage).map((key) =>
          <div key={id} style={{ border: '1px solid black', borderRadius: '5px' }}>
            <p data-testid="shopping-cart-product-name">{JSON.parse(sessionStorage[key])}</p>
            <button type="button" data-testid="shopping-cart-button">Comprar</button>
            <p>Qtd. Estoque: {quantidadeEstoque}</p>
          </div>,
        )}
      </div>
    );
  }
}
