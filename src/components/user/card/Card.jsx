import { useState } from 'react';
import productData from '/src/data/productData.json';
import './Card.css';

const Card = () => {
  const [filter, setFilter] = useState('all');

  if (!productData.ProductData) {
    return <div className="error-message">Error loading products</div>;
  }

  const filteredProducts = productData.ProductData.filter(product => {
    if (filter === 'all') return true;
    return product.type === filter;
  });

  return (
    <div className='card-wrapper'>
      <div className="container">
        <h2 className="products-title">Products</h2>
        <div className="filter-section">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('men')}
            className={`filter-btn ${filter === 'men' ? 'active' : ''}`}
          >
            Mens
          </button>
          <button
            onClick={() => setFilter('women')}
            className={`filter-btn ${filter === 'women' ? 'active' : ''}`}
          >
            Womens
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Rating:</strong> {product.rating} ({product.reviews} reviews)</p>
              <button className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;