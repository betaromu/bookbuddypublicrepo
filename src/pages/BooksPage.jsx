import React from "react";
import BooksList from "../components/BooksList";
import PageHeader from "../components/PageHeader";
import Page from "../components/Page";

export default function BooksPage() {
  return (
    <Page>
      <PageHeader title="Library Catalogue" />
      <BooksList />
    </Page>
  );
}
