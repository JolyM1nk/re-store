import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ shoppingCart }) => {
  let numItems = 0;

  for (let i = 0; i < shoppingCart.cartItems.length; i++) {
    numItems += shoppingCart.cartItems[i].count;
  }

  return {
    numItems,
    total: shoppingCart.orderTotal,
  };
};

export default connect(mapStateToProps)(Header);
