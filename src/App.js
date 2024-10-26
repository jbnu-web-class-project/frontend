import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import TMP from './page/tmp';
import Market from './page/Market';
import Community from './page/Community';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tmp" element={<TMP />} />
      </Routes>
    </Router>
  );
};

export default App;