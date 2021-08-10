const booksRequested = () => 'FETCH_BOOKS_REQUEST';

const booksLoaded = (payload) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload,
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  error,
});

export { booksRequested, booksLoaded, booksError };
