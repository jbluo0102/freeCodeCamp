import { configureStore, createSlice } from "@reduxjs/toolkit";

const quotes = [
  { text: "Some text1", author: "Author1" },
  { text: "Some text2", author: "Author2" },
  { text: "Some text3", author: "Author3" },
  { text: "Some text4", author: "Author4" },
];
const QUOTES_LENGTH = quotes.length;

// Initial state
const currentQuote = { text: "Some text", author: "Author" };

// Slice
const quoteSlice = createSlice({
  name: "quote",
  initialState: currentQuote,
  reducers: {
    getQuote: (state) => {
      const randomQuote = quotes[Math.floor(Math.random() * QUOTES_LENGTH)];
      return randomQuote;
    },
  },
});

// Reducer
const { actions, reducer } = quoteSlice;

// Action creators
const { getQuote } = actions;

// Store
const store = configureStore({
  reducer: {
    quote: reducer,
  },
});

export { store, getQuote };
