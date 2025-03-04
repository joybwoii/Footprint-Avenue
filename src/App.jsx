import  'react';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route
import './App.css';
import Navbar from './components/user/Navbar/Navbar.jsx';
import Home from './components/user/Home/Home.jsx'; // Import the new Home component
import Card from './components/user/card/Card.jsx';
import Footer from './components/user/Footer/Footer.jsx';

import NotFound from './components/NotFound.jsx'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar stays at the top for all routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Homepage with both Cover and ShoeComponent */}
          <Route path="/products" element={<Card />} /> {/* Products page with Card */}
          <Route path="/about" element={<div>About Page (Placeholder)</div>} /> {/* Placeholder for future About page */}
          <Route path="/contact" element={<div>Contact Page (Placeholder)</div>} /> {/* Placeholder for future Contact page */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </main>
      <Footer /> {/* Footer stays at the bottom for all routes */}
    </div>
  );
}
export default App;