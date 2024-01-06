import React from "react";
import { useParams } from "react-router-dom";
import { BookDetails } from "../components/BookDetails";
import Page from "../components/Page";

export default function BookDetailPage({ token }) {
  let { bookId } = useParams();

  return (
    <Page>
      <BookDetails token={token} bookId={bookId} />
    </Page>
  );
}
