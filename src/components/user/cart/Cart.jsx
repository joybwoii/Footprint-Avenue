import  { useState } from 'react';
import './Cart.css'

const Cart = () => {
  // State to manage the quantity of the item
  const [quantity, setQuantity] = useState(1);

  // Sample product data (you can import this from a JSON file or API)
  const product = {
    name: "Women's Candy City Run",
    image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg", // Replace with actual image URL
    price: 40.00,
  };
  

  // Handle incrementing quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Handle decrementing quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate subtotal
  const subtotal = product.price * quantity;

  return (
    <div className='maindiv'>
    <div className="shopping-cart-container">
      <div className="shopping-cart-header">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <button className="close-button">×</button>
      </div>

      {/* Product Item */}
      <div className="product-item">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <div className="quantity-controls">
            <button
              onClick={handleDecrement}
              className="quantity-button decrement"
            >
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="quantity-button increment"
            >
              +
            </button>
          </div>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="remove-button">×</button>
      </div>

      {/* Subtotal and Buttons */}
      <div className="cart-footer">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="cart-buttons">
          <button className="view-cart-button">REMOVE</button>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;