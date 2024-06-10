// src/pages/SearchPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  &:hover {
    background-color: #0056b3;
  }
`;

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem("bookshelf")) || [];
  });

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <Container>
      <Title>Book Search</Title>
      <Search addToBookshelf={addToBookshelf} />
      <Button onClick={() => (window.location.href = "/bookshelf")}>
        Go to My Bookshelf
      </Button>
    </Container>
  );
};

export default SearchPage;
