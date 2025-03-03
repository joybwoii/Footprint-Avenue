import { useState } from 'react'; // Corrected import
import './SneakerCard.css'; 

const SneakerCard = () => {
    const [current, setCounter] = useState(0); // Fixed typo and naming convention

    return (
        <div className="sneaker-card">
            <div className="sneaker-image">
                <img
                    src="/assets/pimg1.jpg" 
                    alt="Women's Cundy City Run Sneaker"
                />
                <span className="sale-badge">Sale!</span>
            </div>
            <div className="sneaker-details">
                <p className="category">Sneaker, Women</p>
                <h3 className="product-title">Womens Cundy City Run</h3>
                <p className="price">
                    <span className="original-price">$54.90</span>
                    <span className="sale-price">$40.00</span> & Free Shipping
                </p>
                <p className="description">
                    Auctor eros suspendisse tellis venenatis sodales purus non
                    pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio
                    fugit consectetur egestas magna pharetra cursus risus, lectus enim
                    eget eu et lobortis faucibus.
                </p>
                <div className="quantity-controls">
                    <button 
                        className="quantity-btn" 
                        onClick={() => setCounter(current > 0 ? current - 1 : 0)} // Prevent negative values
                    >
                        -
                    </button>
                    <span className="quantity">{current}</span>
                    <button 
                        className="quantity-btn" 
                        onClick={() => setCounter(current + 1)}
                    >
                        +
                    </button>
                    <select name="shoe-size" className='select'>
  <option value="">Size</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="8.5">8.5</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="10.5">10.5</option>
  <option value="11">11</option>
</select>
                </div>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    );
};

export default SneakerCard;