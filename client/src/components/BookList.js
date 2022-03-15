import React, { Component } from "react";
import { gql, useQuery } from "@apollo/client";

// 1. Construct the query
// 2. Bind this query to the component
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery, {
    variables: { language: "english" },
  });

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <ul id="book-list">
        <li>{data}</li>
      </ul>
    </div>
  );
};

export default BookList;
