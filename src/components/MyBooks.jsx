import React, { useEffect } from "react";
import { BookItem } from "./BookItem";

export default function MyBooks({ books = [], token, removeBookById }) {
  return (
    <div>
      <h3>My Books</h3>
      <ul>
        {books.length === 0 ? (
          <p>Nothing checked out</p>
        ) : (
          books.map((book) => (
            <BookItem
              book={book}
              token={token}
              key={book.id}
              removeBookById={removeBookById}
            />
          ))
        )}
      </ul>
    </div>
  );
}
