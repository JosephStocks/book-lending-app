import React, { useEffect, useState } from "react";
import { bookSearchByISBN, bookSearch } from "./api-calls/3rd-party-apis";
import axios from "axios";
import styled from "styled-components";

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
      let result = await bookSearch(searchText);
      console.log(result.items);
      setBooks(result.items);
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
          {books.map((book) => (
            <div key={book.id}>{book.volumeInfo.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}
