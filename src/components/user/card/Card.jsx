import { useState } from 'react';
import productData from '/src/data/productData.json'; // Adjust the path based on your folder structure

const Card = () => {
  const [filter, setFilter] = useState('all'); // State for filtering products
  if (!productData.ProductData) {
    return <div>Error loading products</div>;
  }

  // Filter products based on type (men, women, or all)
  const filteredProducts = productData.ProductData.filter(product => {
    if (filter === 'all') return true;
    return product.type === filter;
  });

  return (
    <div className='w-screen bg-white'>
      <div className="container mx-auto p-4 text-black w-100%">
        {/* Product Filter Section */}
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`mr-2 p-2 rounded text-white ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('men')}
            className={`mr-2 p-2 rounded text-white ${filter === 'men' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Mens
          </button>
          <button
            onClick={() => setFilter('women')}
            className={`p-2 rounded text-white ${filter === 'women' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Womens
          </button>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Rating:</strong> {product.rating} ({product.reviews} reviews)</p>
              <button className="mt-2 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
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
