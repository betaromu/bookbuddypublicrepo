import React, { useState, useEffect } from "react";
import BooksPage from "./pages/BooksPage";
import MyAccountPage from "./pages/MyAccountPage";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import BookDetailPage from "./pages/BookDetailPage";

import styles from "./App.module.css";
import NavBar from "./components/Navbar";

function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <div className={styles.div}>
        <NavBar token={token} setToken={setToken} />

        {token ? (
          <PrivateRoutes token={token} />
        ) : (
          <PublicRoutes setToken={setToken} token={token} />
        )}
      </div>
    </BrowserRouter>
  );
}

function PublicRoutes({ setToken, token }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/my-account" element={<Navigate replace to="/login" />} />
      <Route path="/:bookId" element={<Navigate replace to="/login" />} />
      <Route path="/register" element={<RegisterPage setToken={setToken} />} />
      <Route
        path="/login"
        element={<LogInPage setToken={setToken} token={undefined} />}
      />
    </Routes>
  );
}

function PrivateRoutes({ token }) {
  return (
    <Routes>
      <Route path="/login" element={<Navigate replace to="/" />} />
      <Route path="/register" element={<Navigate replace to="/" />} />
      <Route path="/" element={<BooksPage />} />
      <Route path="/:bookId" element={<BookDetailPage token={token} />} />
      <Route path="/my-account" element={<MyAccountPage token={token} />} />
    </Routes>
  );
}

export default App;
