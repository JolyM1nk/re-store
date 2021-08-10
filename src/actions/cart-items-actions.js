const cartIncreaseItem = (id) => {
  return {
    type: 'CART_ADDED_ITEM',
    payload: id,
  };
};

const cartDecreaseItem = (id) => {
  return {
    type: 'CART_DECREASE_ITEM',
    payload: id,
  };
};

const cartDeleteItem = (id) => {
  return {
    type: 'CART_DELETE_ITEM',
    payload: id,
  };
};

export { cartIncreaseItem, cartDecreaseItem, cartDeleteItem };
