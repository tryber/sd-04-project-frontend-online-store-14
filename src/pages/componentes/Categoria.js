import React, { Component } from 'react';

export default class Categoria extends Component {
  render() {
    const { name, id, onclick } = this.props;
    return (
      <div>
        <label htmlFor={id}>
          <input
            type="checkbox" data-testid="category" id={id}
            onClick={onclick}
          />
          {name}
        </label>
      </div>
    );
  }
}
