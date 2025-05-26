import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10.99,
  category: 'electronics',
  image: 'test-image.jpg'
};

describe('ProductCard', () => {
  it('renders product information', () => {
    const mockClick = jest.fn();
    render(<ProductCard product={mockProduct} onClick={mockClick} />);
    
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProduct.image);
  });

  it('calls onClick when clicked', () => {
    const mockClick = jest.fn();
    render(<ProductCard product={mockProduct} onClick={mockClick} />);
    
    fireEvent.click(screen.getByTestId('product-card'));
    expect(mockClick).toHaveBeenCalledWith(mockProduct.id);
  });
});