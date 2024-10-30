import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './page/NotFound'; // 404 페이지/
import Home from './page/Home';
import Signin from './page/Signin';
import Signup from './page/Signup';
import SetProfile from './page/SetProfile';
import TMP from './page/tmp';
import Market from './page/Market';
import Community from './page/Community';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<SetProfile />} />
        <Route path="/market" element={<Market />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tmp" element={<TMP />} />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;