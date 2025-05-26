import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner" data-testid="loading-spinner"></div>
      <p>Loading products...</p>
    </div>
  );
};

export default LoadingSpinner;