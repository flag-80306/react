import { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer() {
  const [books, setBooks] = useState([]);

  useEffect(function () {
    (async function () {
      // const url = "https://api.potterdb.com/v1/books";
      const url = "/lalala.json";
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);

      setBooks(result.data);
    })();
  }, []);

  return (
    <>
      <div className="cardContainer">
        {books.map((book) => (
          <Card key={book.id} attributes={book.attributes} />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
