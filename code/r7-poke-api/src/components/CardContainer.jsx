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
                {/* <PokeCard pokeURL="https://pokeapi.co/api/v2/pokemon/25" />
                <PokeCard pokeURL="https://pokeapi.co/api/v2/pokemon/250" />
                <PokeCard pokeURL="https://pokeapi.co/api/v2/pokemon/500" /> */}
                {pokeList.map(item =>
                    <PokeCard key={item.url} pokeURL={item.url} />
                )}
            </div>
        </>
    )
}

export default CardContainer