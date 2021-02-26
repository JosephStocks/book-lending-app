import React, { useEffect, useState } from "react";
import { bookSearchByISBN, bookSearch, bookSearchByTitle, bookSearchByAuthor } from "./api-calls/3rd-party-apis";
import axios from "axios";
import styled from "styled-components";
import Book from "./components/Book";

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
`;

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   let result;
  //   // (async () => {
  //   //   result = await bookSearchByISBN("9780062654199");
  //   //   console.log(result);
  //   // })();

  //   (async () => {
  //     result = await bookSearch("Pride and Prejudice");
  //     console.log(result);
  //   })();
  // }, []);

  const search = () => {
    (async () => {
      let result = await bookSearchByTitle(searchText);
      console.log(result);
      // setBooks(result.items);
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Form onSubmit={handleSubmit}>
          <input
            value={searchText}
            type="text"
            id="search"
            placeholder="Search for a book!"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button type="submit">Submit</button>
        </Form>
        <div>
          {/* {books.map((book) => (
            // <div key={book.id}>{book.volumeInfo.title}</div>
            <Book book={book} />
          ))} */}
        </div>
      </div>
    </>
  );
}
