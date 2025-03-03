import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found" role="alert">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}