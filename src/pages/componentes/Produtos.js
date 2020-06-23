import React, { Component } from 'react';
import Produto from './Produto';

export default class Produtos extends Component {
  render() {
    const { itens } = this.props;
    return (
      <div style={{ border: '1px solid black', borderRadius: '5px' }}>
        {itens.map((item) =>
          <Produto
            key={item.id} id={item.id} titulo={item.title}
            foto={item.thumbnail} preco={`R$ ${item.price}`}
            quantidadeEstoque={item.available_quantity}
          />,
        )}
      </div>
    );
  }
}
