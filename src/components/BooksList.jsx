/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BooksList.module.css";
import Axios from "axios";

const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchBooks() {
  const response = await Axios.get(`${API}/books`);
  return response;
}

export default function BooksList() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState();
  useEffect(() => {
    async function getAndSetBooks() {
      try {
        const response = await fetchBooks();
        setBooks(response.data.books || []);
      } catch (error) {
        console.log(error);
      }
    }
    getAndSetBooks();
  }, []);

  const booksToList = searchText
    ? books.filter(
        (book) => book?.title?.toLowerCase().includes(searchText.toLowerCase()) // Using optional chaining
      )
    : books;

  return (
    <ul className={styles.ul}>
      {!booksToList ? (
        <h3>Loading...</h3>
      ) : booksToList.length ? (
        <>
          <input
            placeholder="Search..."
            onChange={(event) => setSearchText(event.target.value)}
          />
          {booksToList.map((book) => {
            return (
              <li key={book.id}>
                {" "}
                <Link to={`/${book.id}`}>
                  <h3>{book.title}</h3>
                </Link>
              </li>
            );
          })}
        </>
      ) : (
        <h3>No Books Found!</h3>
      )}
    </ul>
  );
}
