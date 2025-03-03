import  'react';
import './ShoeComponent.css'; // Optional: Use a separate CSS file

const ShoeComponent = () => {
  return (
    <div className="shoe-component">
      <div className="shoe-image">
        <img src="https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Stylish Shoe" />
      </div>
      <div className="shoe-info">
        <h3>About Us</h3>
        <h2>Selected materials designed for comfort and sustainability</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default ShoeComponent;