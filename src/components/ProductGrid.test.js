import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductGrid from './ProductGrid';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 10.99,
    category: 'electronics',
    image: 'test-image.jpg'
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 20.99,
    category: 'clothing',
    image: 'test-image.jpg'
  }
];

describe('ProductGrid', () => {
  it('renders the correct number of products', () => {
    const mockClick = jest.fn();
    render(<ProductGrid products={mockProducts} onProductClick={mockClick} />);
    
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(mockProducts.length);
  });

  it('displays product information correctly', () => {
    const mockClick = jest.fn();
    render(<ProductGrid products={mockProducts} onProductClick={mockClick} />);
    
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('$10.99')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
  });
});