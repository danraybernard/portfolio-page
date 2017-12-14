import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Menu />
    </div>
  );
}

export default Header;
