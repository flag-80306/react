import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import pokeApiService from "../services/pokeApiService";
import FavouritesButton from "./FavouritesButton";

PokeCard.propTypes = {
  url: PropTypes.string,
};

function PokeCard({ url }) {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      (async function () {
        const data = await pokeApiService.getPokemonByURL(url);
        setPokemonInfo(data);
        setIsLoading(false);
      })();
    },
    [url]
  );

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <div>
        <img className="pokeImage" src={pokemonInfo.imageURL} />

        <div>{pokemonInfo.formattedId}</div>
        <div>{pokemonInfo.name}</div>
        <FavouritesButton id={pokemonInfo.id} name={pokemonInfo.name} />
      </div>
    </>
  );
}

export default PokeCard;
