import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); 
        setLoading(false);  
      } catch (error) {
        console.error('Error fetching the products:', error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-card-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductCardList />
    </div>
  );
}

export default App;
