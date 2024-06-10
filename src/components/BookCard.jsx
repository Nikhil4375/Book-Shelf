// src/components/BookCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #333;
`;

const Author = styled.p`
  font-size: 1em;
  color: #777;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <Card>
      <Title>{book.title}</Title>
      <Author>{book.author_name?.[0]}</Author>
      <Button onClick={() => addToBookshelf(book)}>Add to Bookshelf</Button>
    </Card>
  );
};

export default BookCard;
