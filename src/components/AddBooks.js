import "./AddBooks.scss";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import { useState } from "react";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="add-books">
      <label htmlFor="title">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </label>
      <button type="button">ADD BOOK</button>
    </div>
  );
};

export default AddBooks;
