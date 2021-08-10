import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = ({ numItems, total }) => {
  return (
    <header className="header">
      <Link className="logo text-dark" to="/home">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fas fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default Header;
