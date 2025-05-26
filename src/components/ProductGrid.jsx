import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={onProductClick} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;