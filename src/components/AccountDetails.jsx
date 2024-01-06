import React from "react";
import { useState, useEffect } from "react";

import styles from "./AccountDetails.module.css";

import MyBooks from "./MyBooks";

const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

async function fetchMyAccount({ token }) {
  const response = await fetch(`${API}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export default function AccountDetails({ token }) {
  const [accountDetails, setAccountDetails] = useState();

  const removeBookById = (bookId) => {
    setAccountDetails((accountDetails) => {
      return {
        ...accountDetails,
        books: accountDetails.books.filter((book) => book.id !== bookId),
      };
    });
  };

  useEffect(() => {
    async function getAccountDetails() {
      try {
        const account = await fetchMyAccount({ token });
        setAccountDetails(account);
      } catch (error) {
        console.error(error);
      }
    }
    getAccountDetails();
  }, []);

  if (!accountDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.div}>
      <h1>{`${accountDetails.firstname} ${accountDetails.lastname}`}</h1>
      <h3>{`Email: ${accountDetails.email}`}</h3>
      <MyBooks
        books={accountDetails.books}
        token={token}
        removeBookById={removeBookById}
      />
    </div>
  );
}
