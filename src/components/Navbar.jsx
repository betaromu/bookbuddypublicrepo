import bookLogo from "../assets/books.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function NavBar({ token, setToken }) {
  return (
    <nav className={styles.nav}>
      <img id="logo-image" src={bookLogo} />
      <h1>Book Buddy</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">Catalog</Link>
        </li>
        <AuthButton token={token} setToken={setToken} />
        <li className={styles.li}>
          <Link to="/my-account">My Account</Link>
        </li>
      </ul>
    </nav>
  );
}

function AuthButton({ token, setToken }) {
  if (!token) {
    return (
      <li className={styles.li}>
        <Link to="/login">Login</Link>
      </li>
    );
  }

  return (
    <li className={styles.li} onClick={() => setToken(null)}>
      <a href="#">Log out</a>
    </li>
  );
}
