async function getPokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon"
    const response = await fetch(url)
    const result = await response.json()

    return result.results
}

async function getPokemonByURL(url) {
    const response = await fetch(url)
    const result = await response.json()

    const newResult =  {
        id: result.id,
        formattedId: "#" + result.id.toString().padStart(4, "0"),
        name: result.name,
        imageURL: result.sprites.other["official-artwork"].front_default,
        types: result.types.map(item => item.type.name),
        url: result.url
    }

    return newResult
}

function getPokemonByName(name) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + name
    return getPokemonByURL(url)
}

export default {
    getPokemonList,
    getPokemonByURL,
    getPokemonByName
}