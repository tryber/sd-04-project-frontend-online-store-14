import React, { Component } from 'react';
import Categoria from './Categoria';
import * as api from '../../services/api';

export default class Categorias extends Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
  }

  componentDidMount() {
    api.getCategories().then((categorias) => this.setState({ categorias }));
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
      <div style={{ border: '1px solid black', borderRadius: '5px' }}>
        {categorias.map((categoria) =>
          <Categoria key={categoria.id} name={categoria.name} />,
        )}
      </div>
    );
  }
}
