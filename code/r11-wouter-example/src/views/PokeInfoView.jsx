import PokemonInfo from "../components/PokemonInfo"

function PokeInfoView({ params }) {

    return (
        <>
            Escolheste o...
            {params.name}
            <br />
            <br />
            <PokemonInfo name={params.name}/>
        </>
    )
}

export default PokeInfoView