import React from 'react';
import './shopping-cart-table.css';

import { connect } from 'react-redux';
import {
  cartIncreaseItem,
  cartDecreaseItem,
  cartDeleteItem,
} from '../../actions';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const render = items.map((item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}
          >
            <i className="fas fa-trash" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="fas fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="fas fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{render}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(cartIncreaseItem(id));
    },
    onDecrease: (id) => {
      dispatch(cartDecreaseItem(id));
    },
    onDelete: (id) => {
      dispatch(cartDeleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
