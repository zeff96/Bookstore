import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const index = state.books.find((b) => b.id === action.payload.id);
      state.books.splice(index, 1);
    },
  },
});

export const selectedBooks = (state) => state.books.books;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
