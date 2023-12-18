import { useEffect, useState } from "react";

function DetailView({ id }) {
  const [city, setCity] = useState({});

  useEffect(function () {
    (async function () {
      const url = "/api/data.json";

      const response = await fetch(url);
      const result = await response.json();

      const foundElement = result.find((elem) => {
        return elem.id == id;
      });
      console.log(foundElement);
      setCity(foundElement);
    })();
  }, []);
  return (
    <>
      <h2>The details</h2>
      <p>{city.id}</p>
      <p>{city.name}</p>
      <p>{city.description}</p>
    </>
  );
}

export default DetailView;
