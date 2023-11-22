import { useEffect, useState } from "react"

function PokemonInfo({name}) {
    
    const [pokeInfo, setPokeInfo] = useState({
        height: 0
    })

    useEffect(function() {
        (async function() {
            const url = "https://pokeapi.co/api/v2/pokemon/" + name

            const response = await fetch(url)
            const result = await response.json()

            setPokeInfo(result)
            console.log(result)
        })()
    }, [name])

    return (
        <>
            <img src={pokeInfo.sprites?.other["official-artwork"].front_default} />
            <br />
            <br />
            Height: {pokeInfo.height}
        </>
    )
}

export default PokemonInfo