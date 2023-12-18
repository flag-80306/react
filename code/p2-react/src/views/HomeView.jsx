import { useEffect, useState } from "react";
import { Link } from "wouter";

function HomeView() {
  const [data, setData] = useState([]);
  useEffect(function () {
    (async function () {
      const url = "/api/data.json";

      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      setData(result);
    })();
  }, []);

  return (
    <>
      <ul>
        {data.map((element) => (
          <li key={element.id}>
            <Link href={"/details/" + element.id}>{element.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomeView;
