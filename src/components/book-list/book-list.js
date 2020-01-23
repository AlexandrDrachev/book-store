import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './book-list.css';
import BookListItem from "../book-list-item";
import { withBookstoreService } from '../hoc';
import { /*booksLoaded, booksRequested, booksError*/ fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <Fragment>
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem
                  onAddedToCart={() => onAddedToCart(book.id)}
                  book={book} />
              </li>
            );
          })
        }
      </ul>
      <div className="bord-bot"></div>
    </Fragment>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
  //   //1. receive data
  //   const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
  //   //2. dispatch action to store
  //   booksRequested();
  //   bookstoreService.getBooks()
  //     .then((data) => {
  //       booksLoaded(data);
  //     })
  //     .catch((error) => booksError(error));
    this.props.fetchBooks();
  };

  render() {

    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (<BookList
      books={books} onAddedToCart={onAddedToCart}/>);

  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books: books,
    loading: loading,
    error: error
  };
};

// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);


