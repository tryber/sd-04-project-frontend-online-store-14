import React, { Component } from 'react';

export default class Categoria extends Component {
  render() {
    const { name } = this.props;
    return (
      <div data-testid="category">
        <p>{name}</p>
      </div>
    );
  }
}
