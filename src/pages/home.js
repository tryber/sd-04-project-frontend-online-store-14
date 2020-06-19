import React, { Component } from 'react';
import Conteudo from './componentes/Conteudo';

export default class Home extends Component {
  render() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Conteudo />
      </h1>
    );
  }
}
