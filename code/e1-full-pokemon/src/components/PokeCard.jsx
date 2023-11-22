import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import pokeApiService from "../services/pokeApiService";
import { useDispatch } from "react-redux";
import { add } from "../app/favouritesSlice";

PokeCard.propTypes = {
  url: PropTypes.string,
};

function PokeCard({ url }) {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

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

  function addToFavourites() {
    const pokemon = {
      name: pokemonInfo.name,
      url: pokemonInfo.url,
    };

    dispatch(add(pokemon));
  }

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
      </div>
      <button onClick={addToFavourites}>Add to favourites</button>
    </>
  );
}

export default PokeCard;
