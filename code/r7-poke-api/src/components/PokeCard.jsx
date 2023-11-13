import { useState, useEffect } from "react"
import fetchPokemonService from "../services/fetchPokemonService"

function PokeCard() {

    const [pokeInfo, setPokeInfo] = useState({})

    async function getPokemonInfo() {
        const result = await fetchPokemonService.fetchPokemonInfo("https://pokeapi.co/api/v2/pokemon/25")
        console.log(result)
        setPokeInfo(result)
    }

    useEffect(function() {
        getPokemonInfo()
    }, [])

    return (
      <>
        <div className="pokeCard">
            <img src={pokeInfo.imageURL} alt="" />
            <div className="pokeCardId">{pokeInfo.formattedId}</div>
            <div className="pokeCardName">{pokeInfo.name}</div>
            <div className="pokeCardTypes">
                {pokeInfo.types?.map(item => {
                    return <div key={item}>{item}</div>
                })}
            </div>
        </div>
      </>
    )
  }
  
  export default PokeCard