import { useEffect, useState } from "react";

function PokemonsOnRender() {
  const [pokeList, setPokeList] = useState([]);

  async function getPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=2000";

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
        {pokeList.map(function(result, index) {
          return <li>{index} - {result.name}</li>
        })}
      </ul>
    </>
  )
}

export default PokemonsOnRender
