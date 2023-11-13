import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"

import pokeAPIService from "../services/pokeAPIService"

function CardContainer() {
    const [pokeList, setPokeList] = useState([])

    useEffect(function() {
        (async function() {
            const result = await pokeAPIService.getPokemonList()
            setPokeList(result)
        })()
    }, [])

    return (
        <>
            <div className="cardContainer">
                {pokeList.map(item =>
                    <PokeCard key={item.url} pokeURL={item.url}/>
                )}
            </div>
        </>
    )
}

export default CardContainer