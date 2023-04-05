/* eslint-disable react/prop-types */
import "./CreateBooks.scss";
import { useSelector, useDispatch } from "react-redux";
import CreateBook from "./CreateBook";
import { selectedBooks, getBooksAsync } from "../redux/books/booksSlice";
import { useEffect } from "react";

const AddBookList = () => {
  const books = useSelector(selectedBooks);
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.item_id} className="book-item">
          <CreateBook
            book={book}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default AddBookList;
