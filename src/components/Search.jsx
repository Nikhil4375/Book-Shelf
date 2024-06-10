// src/components/Search.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { fetchBooks } from "../utils/api";
import BookCard from "./BookCard";

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Search = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const books = await fetchBooks(e.target.value);
      setResults(books);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={handleSearch}
      />
      <Results>
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
          />
        ))}
      </Results>
    </div>
  );
};

export default Search;
