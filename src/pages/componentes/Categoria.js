import React, { Component } from 'react';
import Produto from './Produto';

export default class Categoria extends Component {
  render() {
    const { name } = this.props;
    return (
      <div data-testid="category">
        <p>{name}</p>
        <Produto />
      </div>
    )
  }
}
