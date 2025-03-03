import React from 'react';
import Cover from '../Cover/Cover.jsx';
import ShoeComponent from '../ShoeComponent/ShoeComponent.jsx'; // Updated path for consistency
import './Home.css'; // Add styling for Home

export default function Home() {
  return (
    <div className="home-container" role="main" aria-label="Homepage with Cover and Shoe Component">
      <Cover />
      <ShoeComponent />
    </div>
  );
}