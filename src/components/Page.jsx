import styles from "./Page.module.css";

export default function Page({ children }) {
  return <div className={styles.div}>{children}</div>;
}
