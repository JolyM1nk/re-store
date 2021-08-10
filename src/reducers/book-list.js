const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  const { payload, error } = action;

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return { loading: true, error: null };

    case 'FETCH_BOOKS_SUCCESS':
      return { books: payload, loading: false };

    case 'FETCH_BOOKS_FAILURE':
      return { loading: false, error };

    default:
      return state.bookList;
  }
};

export default updateBookList;