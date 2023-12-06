import PropTypes from "prop-types";
import { useEffect, useState } from "react";

BookInfoView.propTypes = {
  params: PropTypes.object,
};

function BookInfoView({ params }) {
  const [book, setBook] = useState({});

  useEffect(
    function () {
      (async function () {
        const url = "https://api.potterdb.com/v1/books/" + params.titleSlug;
        console.log(url);

        const response = await fetch(url);
        const result = await response.json();

        setBook(result.data.attributes);
      })();
    },
    [params]
  );

  return (
    <>
      <h1>INFO</h1>
      <h2>{book.title}</h2>
      <p> {book.summary}</p>
    </>
  );
}

export default BookInfoView;
