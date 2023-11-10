import { useEffect, useState } from "react";

function PokemonsOnRender() {
  const [pokeList, setPokeList] = useState([]);

  async function getPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const response = await fetch(url);
    const result = await response.json();
    
    setPokeList(result.results)
  }

  useEffect(function() {
    getPokemon()
  }, []);
  
  return (
    <>
      <ul>
        {pokeList.map(function(result) {
          return <li>{result.name}</li>
        })}
      </ul>
    </>
  )
}

export default PokemonsOnRender
