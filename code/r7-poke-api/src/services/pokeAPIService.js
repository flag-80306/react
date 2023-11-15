function mapTypes(types) {
    const simpleTypes = []
    for (let i = 0; i < types.length; i++) {
        simpleTypes.push(types[i].type.name)
    }
    return simpleTypes
}

function padIdWithZeros(id) {
    return id.toString().padStart(4, "0")
}

async function getPokemon(url) {
    const response = await fetch(url)
    const result = await response.json()
        
    const newResult =  {
        id: result.id,
        formattedId: "#" + padIdWithZeros(result.id),
        name: result.name,
        imageURL: result.sprites.other["official-artwork"].front_default,
        // types: result.types.map(item => item.type.name)
        types: mapTypes(result.types)
    }

    console.log("-----START----")
    console.log(result)
    console.log(newResult)
    console.log("-----END----")

    return newResult;
}

async function getPokemonList(limit = 25) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + limit)
    const result = await response.json()

    return result.results
}

export default {
    getPokemon,
    getPokemonList
}