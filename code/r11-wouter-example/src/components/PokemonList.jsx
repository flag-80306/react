import { useEffect, useState } from "react"
import { Link } from "wouter"

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([])
    
    useEffect(function() {
        (async function() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon")
            const result = await response.json()

            setPokemonList(result.results)
        })()
    }, [])


    return (
        <>
            <ul>
                {pokemonList.map(item => 
                    <li key={item.url}>
                        <Link href={"/pokemon/" + item.name}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default PokemonList