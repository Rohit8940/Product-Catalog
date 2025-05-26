import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});