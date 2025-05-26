import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('https://fakestoreapi.com/products'),
          fetch('https://fakestoreapi.com/products/categories')
        ]);
        
        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(['all', ...categoriesData]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-list-page">
      <h1>Rohit's Products</h1>
      
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
      ) : (
        <div className="no-results">
          <p>No products match your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListPage;