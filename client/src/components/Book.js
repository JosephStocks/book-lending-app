import React from "react";

export default function Book({ book }) {
  let {
    id,
    selfLink,
    title,
    authors,
    categories,
    description,
    imageLinks,
    industryIndentifiers,
    infoLink,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    textSnippet,
  } = book;

  // if not description, show textSnippet
  return (
    <>
      <div key={id}>
        {title && <div key={`title-${id}`}>{title}</div>}
        {categories && <div key={`categories-${id}`}>{categories}</div>}
        {description && <div key={`description-${id}`}>{description}</div>}
        ----------------------------------------------------------------------------------------------------------
      </div>
    </>
  );
}
