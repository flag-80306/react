import PropTypes from "prop-types";
import PokeCard from "../components/PokeCard";

PokemonDetailView.propTypes = {
  params: PropTypes.object,
};

function PokemonDetailView({ params }) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + params.name;

  return (
    <>
      <h1 className="title">All about {params.name}</h1>
      <PokeCard url={url} />
    </>
  );
}

export default PokemonDetailView;
