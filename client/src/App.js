import React, { useEffect, useState } from "react";
import { bookSearchByISBN, bookSearch } from "./api-calls/3rd-party-apis";
import axios from "axios";

export default function App() {
  useEffect(() => {
    let result;
    // (async () => {
    //   result = await bookSearchByISBN("9780062654199");
    //   console.log(result);
    // })();

    (async () => {
      result = await bookSearch("Pride and Prejudice");
      console.log(result);
    })();
  }, []);
  return <></>;
}
