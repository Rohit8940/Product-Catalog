import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main role='main'>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;