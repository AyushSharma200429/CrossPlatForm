import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products'; 
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import SE03Lite from './components/SE03Lite';
import SE03 from './components/SE03';
import SE03Max from './components/SE03Max';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/product/se03-lite" element={<SE03Lite />} />
          <Route path="/product/se03" element={<SE03 />} />
          <Route path="/product/se03-max" element={<SE03Max />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
