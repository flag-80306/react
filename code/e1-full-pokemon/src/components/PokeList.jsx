import { useEffect, useState } from "react";
import { Link } from "wouter";
import pokeApiService from "../services/pokeApiService";

function PokeList() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(function () {
    (async function () {
      const data = await pokeApiService.getPokemonList();
      setPokeList(data);
    })();
  });

  return (
    <>
      <ul>
        {pokeList.map((item, index) => (
          <li key={index}>
            <Link href={`/pokemon/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokeList;
