import React from "react";
import { ReactLenis } from "lenis/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const lenisOptions = {
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expensive Smoothness
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false, // Mobile native scroll is usually better
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ReactLenis>
  );
}

export default App;
