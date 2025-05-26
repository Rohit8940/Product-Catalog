import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back to Products
      </button>
      
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;