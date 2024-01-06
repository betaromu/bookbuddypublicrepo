import React, { useState } from "react";

const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
export function ReturnBookButton({
  token,
  bookId: reservationId,
  removeBookById,
}) {
  const [status, setStatus] = useState("idle");
  const returnBook = async () => {
    if (status === "loading") return;
    try {
      setStatus("loading");

      await fetch(`${API}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          available: true,
        }),
      }).then((response) => response.json());
      removeBookById(reservationId);
      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <button disabled={status === "loading"} onClick={() => returnBook()}>
      Return
    </button>
  );
}
