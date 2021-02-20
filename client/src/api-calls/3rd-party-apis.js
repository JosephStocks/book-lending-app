import axios from "axios";

export const bookSearchByISBN = async (isbn) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      country: "US",
      q: `isbn:${isbn}`,
    },
  });

  // console.log(results);
  return results;
};

export const bookSearch = async (query) => {
  let results = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      country: "US",
      q: query,
    },
  });

  // console.log(results);
  return results;
};
