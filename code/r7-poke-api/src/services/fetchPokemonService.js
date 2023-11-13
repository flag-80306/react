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

async function fetchPokemonInfo(url) {
    const response = await fetch(url)
    const result = await response.json()
        
    return {
        id: result.id,
        formattedId: "#" + padIdWithZeros(result.id),
        name: result.name,
        imageURL: result.sprites.other["official-artwork"].front_default,
        // types: result.types.map(item => item.type.name)
        types: mapTypes(result.types)
    }
}

export default {
    fetchPokemonInfo
}