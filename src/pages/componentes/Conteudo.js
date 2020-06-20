import React, { Component } from 'react';
import Categorias from './Categorias';

export default class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termo: '',
      itens: [],
    }
    this.obterItens = this.obterItens.bind(this);
  }

  obterItens(termo) {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${termo}`)
      .then((response) =>  itens.json())
  }

  render() {
    const { termo } = this.state;
    return (
      <div>
        <input type="text" data-testid="input" value={termo}
          onChange={(e) => this.setState({ termo: e.target.value })}
        />
        <button type="button" onClick={() => this.obterItens(termo)}>Buscar</button>
        <Categorias />
      </div>
    );
  }
}
