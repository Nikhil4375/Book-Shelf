// src/components/Bookshelf.jsx
import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 16px;
  color: #333;
`;

const BookshelfContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BookCardStyled = styled.div`
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

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <Title>My Bookshelf</Title>
      <BookshelfContainer>
        {bookshelf.map((book, index) => (
          <BookCardStyled key={index}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.[0]}</p>
          </BookCardStyled>
        ))}
      </BookshelfContainer>
    </div>
  );
};

export default Bookshelf;
