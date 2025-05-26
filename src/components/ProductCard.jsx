import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      className="product-card" 
      onClick={() => onClick(product.id)}
      data-testid="product-card"
    >
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;