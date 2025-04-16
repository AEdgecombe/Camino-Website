import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Journal from './pages/Journal';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
