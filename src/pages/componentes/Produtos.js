import React, { Component } from 'react';
import Produto from './Produtos';

export default class Produtos extends Component {
  render() {
    return (
      <div style={{border: '1px solid black', borderRadius: '5px'}}>
        <Produto />
      </div>
    );
  }
}
