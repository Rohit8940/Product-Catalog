import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner and text', () => {
    render(<LoadingSpinner />);
    
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });
});