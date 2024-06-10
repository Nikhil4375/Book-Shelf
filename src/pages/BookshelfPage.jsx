// src/pages/BookshelfPage.jsx
import React from "react";
import styled from "styled-components";
import Bookshelf from "../components/Bookshelf";

const Container = styled.div`
  padding: 20px;
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

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <Container>
      <Bookshelf bookshelf={bookshelf} />
      <Button onClick={() => (window.location.href = "/")}>
        Go to Book Search
      </Button>
    </Container>
  );
};

export default BookshelfPage;
