import { useState } from "react";

function PokemonsOnClick() {
  async function clickHandler() {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const response = await fetch(url);
    const result = await response.json();
    
    setPokeList(result.results)
  }

  const [pokeList, setPokeList] = useState([]);
  
  return (
    <>
      <button onClick={clickHandler}>GOTTA CATCH EM ALL!!!!</button>
      <ul>
        {pokeList.map(function(result) {
          return <li>{result.name}</li>
        })}
      </ul>
    </>
  )
}

export default PokemonsOnClick
