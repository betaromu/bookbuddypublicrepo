import React from "react";
import { ReturnBookButton } from "./ReturnBookButton";
import styles from "./BookItem.module.css";

export function BookItem({ book, token, removeBookById }) {
  return (
    <li className={styles.li}>
      <p>{book.title}</p>
      <ReturnBookButton
        token={token}
        bookId={book.id}
        removeBookById={removeBookById}
      />
    </li>
  );
}
