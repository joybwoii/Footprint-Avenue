import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="product-grid">
      <div className="product-card">
        <div className="product-image">
          <img src="/assets/pimg1.jpg" alt="Womens Blue Training" />
        </div>
        <div className="quick-view">Quick View</div>
        <div className="product-details">
          <h3>Womens Blue Training</h3>
          <div className="price">
            <p className="old-price">$69.90</p>
            <p className="new-price">$60.00</p>
          </div>
          <div className="rating">★★★★★</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/assets/pimg1.jpg" alt="Womens Blue Training" />
        </div>
        <div className="quick-view">Quick View</div>
        <div className="product-details">
          <h3>Womens Blue Training</h3>
          <div className="price">
            <p className="old-price">$69.90</p>
            <p className="new-price">$60.00</p>
          </div>
          <div className="rating">★★★★★</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/assets/pimg1.jpg" alt="Womens Blue Training" />
        </div>
        <div className="quick-view">Quick View</div>
        <div className="product-details">
          <h3>Womens Blue Training</h3>
          <div className="price">
            <p className="old-price">$69.90</p>
            <p className="new-price">$60.00</p>
          </div>
          <div className="rating">★★★★★</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/assets/pimg1.jpg" alt="Womens Blue Training" />
        </div>
        <div className="quick-view">Quick View</div>
        <div className="product-details">
          <h3>Womens Blue Training</h3>
          <div className="price">
            <p className="old-price">$69.90</p>
            <p className="new-price">$60.00</p>
          </div>
          <div className="rating">★★★★★</div>
        </div>
      </div>
    </div>
  );
}