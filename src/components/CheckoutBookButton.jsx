import React, { useState } from "react";
import { API } from "./BookDetails";

export function CheckoutBookButton({ token, bookId }) {
  const [status, setStatus] = useState("idle");
  const checkOutBook = async () => {
    if (status === "loading") return;
    try {
      setStatus("loading");
      const response = await fetch(`${API}/books/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          available: false,
        }),
      }).then((response) => response.json());

      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <button disabled={status === "loading"} onClick={() => checkOutBook()}>
      Checkout
    </button>
  );
}
