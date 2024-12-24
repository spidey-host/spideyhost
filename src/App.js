import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer.jsx';

import About from "./pages/About.jsx";
import Home from "./pages/index.jsx";
import Shared from './pages/Shared-hosting.jsx';
import Cloud from './pages/Cloud-hosting.jsx';
import VPS from './pages/VPS-hosting.jsx';
import Wordpress from './pages/Wordpress-hosting.jsx';
import DomainPricing from './pages/DomainPricing.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shared-hosting" element={<Shared />} />
                <Route path="/cloud-hosting" element={<Cloud />} />
                <Route path="/vps-hosting" element={<VPS />} />
                <Route path="/wordpress-hosting" element={<Wordpress />} />
                <Route path="/domain" element={<DomainPricing />} />
            </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
