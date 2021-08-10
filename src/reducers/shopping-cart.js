const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
  }
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  const newCartItem = {
    id,
    title,
    count: count + quantity,
    total: total + book.price * quantity,
  };

  if (newCartItem.count === 0) {
    return undefined;
  }

  return newCartItem;
};

const deleteCartItem = (cartItems, idx) => {
  return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
};

const updateOrder = (state, bookId, quantity = 0, deleteOrder = false) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems, orderTotal },
  } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => bookId === id);
  const item = cartItems[itemIndex];
  const total = orderTotal + book.price * quantity;

  const newCartItem = updateCartItem(book, item, quantity);

  if (!newCartItem || deleteOrder) {
    return {
      ...state,
      cartItems: deleteCartItem(cartItems, itemIndex),
    };
  }

  return {
    orderTotal: total,
    cartItems: updateCartItems(cartItems, newCartItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  const { payload } = action;

  switch (action.type) {
    case 'CART_ADDED_ITEM':
      return updateOrder(state, payload, 1);

    case 'CART_DECREASE_ITEM':
      return updateOrder(state, payload, -1);

    case 'CART_DELETE_ITEM':
      return updateOrder(state, payload, undefined, true);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;