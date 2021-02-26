import axios from "axios";

const defaultParams = {
  key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
  country: "US",
  printType: "books",
  projection: "lite",
  maxResults: 40,
};

export const bookSearchByISBN = async (isbn) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      ...defaultParams,
      q: `isbn:${isbn}`,
    },
  });

  // console.log(results);
  return results;
};

export const bookSearchByTitle = async (title) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      ...defaultParams,
      q: `intitle:${title}`,
    },
  });

  // console.log(results);
  return results;
};

export const bookSearchByAuthor = async (author) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      ...defaultParams,
      q: `inauthor:${author}`,
    },
  });

  // console.log(results);
  return results;
};

export const bookSearch = async (query) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      ...defaultParams,
      q: query,
    },
  });

  // console.log(results);
  return results.data;
};
