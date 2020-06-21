import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Criar página de listagem de produtos vazia', () => {
  it.skip('render without crash', () => {
    render(<App />);
  });

  it.skip('should have a message', () => {
    render(<App />);
    expect(screen.getByTestId('home-initial-message')).toHaveTextContent('Digite algum termo de pesquisa ou escolha uma categoria.')
  });
});
