import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import { withService } from '../hoc';
import {
  booksLoaded,
  booksRequested,
  booksError,
  cartIncreaseItem,
} from '../../actions';
import { compose } from '../../utils';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookListItem
          book={book}
          key={book.id}
          onAddedToCart={() => onAddedToCart(book.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      ownProps.service
        .getBooks()
        .then((books) => dispatch(booksLoaded(books)))
        .catch((err) => dispatch(booksError(err)));
    },
    onAddedToCart: (id) => dispatch(cartIncreaseItem(id)),
  };
};

// const mapDispatchToProps = { booksLoaded, booksRequested, booksError };

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
