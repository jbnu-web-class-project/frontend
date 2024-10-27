import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404Page.css'; // CSS 파일을 따로 만들어 스타일을 추가할 수 있습니다.

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-link">Go Back Home</Link>
      <p className="not-found-suggestion">Or check out these links:</p>
      <ul className="suggested-links">
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/tmp">TMP</Link></li>
      </ul>
    </div>
  );
};

export default NotFound;