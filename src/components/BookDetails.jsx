import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CheckoutBookButton } from "./CheckoutBookButton";
import styles from "./BookDetails.module.css";

export const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

async function fetchBookById(bookId) {
  const response = await Axios.get(`${API}/books/${bookId}`);
  return response;
}
export function BookDetails({ token, bookId }) {
  const [book, setBook] = useState();

  useEffect(() => {
    async function getAndSetBook() {
      try {
        const response = await fetchBookById(bookId);
        setBook(response.data.book);
      } catch (error) {
        console.log(error);
      }
    }
    getAndSetBook();
  }, []);

  if (!book) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.div}>
      <img className={styles.img} src={book.coverimage} />
      <h1>Book Title {book.title}</h1>
      <p className={styles.p}>Book Author: {book.author}</p>
      <p className={styles.p}>Book Description: {book.description}</p>
      {book.available ? (
        <CheckoutBookButton token={token} bookId={bookId} />
      ) : null}
    </div>
  );
}
