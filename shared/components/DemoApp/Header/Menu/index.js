import React from 'react';
import Link from 'react-router-dom/Link';
import '../Menu/menu.css';

function Menu() {
  return (
    <div className="bannerList">
      <div className="outer" style={{ float: 'left' }}>
        <div style={{ float: 'left' }}>
          <h1 style={{ margin: '0px', padding: '0px', color: 'white' }}>Daniel Bernard</h1>
        </div>

        <div>
          <h4 style={{ color: 'white' }}> Web developer </h4>
        </div>
      </div>

      <ul>
        <div style={{ float: 'right' }}>
          <Link to="/">
            <li className="button"> Home</li>
          </Link>

          <Link to="/counter">
            <li className="button">Projects</li>
          </Link>

          <Link to="/about">
            <li className="button">Other stuff</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Menu;
