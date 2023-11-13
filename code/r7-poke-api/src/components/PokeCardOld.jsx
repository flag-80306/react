import { useState, useEffect } from "react"

function PokeCardOld() {

    const [pokeInfo, setPokeInfo] = useState({})

    async function getPokemonInfo() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/67")
        const result = await response.json()
        
        setPokeInfo(result)
    }

    useEffect(function() {
        getPokemonInfo()
    }, [])

    return (
      <>
        <div className="pokeCard">
            <img src={pokeInfo.sprites?.other["official-artwork"].front_default} alt="" />
            <div className="pokeCardId">#00{pokeInfo.id}</div>
            <div className="pokeCardName">{pokeInfo.name}</div>
            <div className="pokeCardTypes">
                {pokeInfo.types?.map(item => {
                    return <div key={item.type.url}>{item.type.name}</div>
                })}
            </div>
        </div>
      </>
    )
  }
  
  export default PokeCardOld