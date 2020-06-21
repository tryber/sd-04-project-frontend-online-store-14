import React, { Component } from 'react';
import Produtos from './Produtos';
import Categorias from './Categorias';
import * as api from '../../services/api';

export default class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termo: '',
      itens: [],
    }
  }

  obterItens(termo) {
    api.getProductsFromCategoryAndQuery(undefined, termo)
      .then((itens) => this.setState({ itens: itens.results }));
  }

  render() {
    const { termo, itens } = this.state;
    return (
      <div style={{ border: '1px solid black', borderRadius: '5px' }}>
        <input type="text" data-testid="query-input" value={termo}
          onChange={(e) => this.setState({ termo: e.target.value })}
        />
        <button type="button" data-testid="query-button"
          onClick={() => this.obterItens(termo)}>
          Buscar
        </button>
        <Produtos itens={itens} />
        <Categorias />
      </div>
    );
  }
}
