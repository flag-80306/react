import { useDispatch } from "react-redux";
import { addPokemonToFavourites } from "../app/favouritesSlice";
import PropTypes from "prop-types";

FavouritesButton.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

function FavouritesButton({ id, name }) {
  const dispatch = useDispatch();

  function addToFavourites() {
    const pokemon = {
      name,
      url: "https://pokeapi.co/api/v2/pokemon/" + id,
    };

    dispatch(addPokemonToFavourites(pokemon));
  }

  return (
    <>
      <button onClick={addToFavourites}>Add to favourites</button>
    </>
  );
}

export default FavouritesButton;
