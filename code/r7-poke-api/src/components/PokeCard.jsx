import { useState, useEffect } from "react"
import pokeAPIService from "../services/pokeAPIService"

function PokeCard({pokeURL}) {

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(function() {
        (async function () {
            const result = await pokeAPIService.getPokemon(pokeURL)
            console.log(result)
            setPokeInfo(result)
        })()
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