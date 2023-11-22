import { useSelector } from "react-redux";
import { Link } from "wouter";

function FavouritesView() {
  const favourites = useSelector((state) => state.favourites.value);

  return (
    <>
      <h1 className="title">My Favourite Pokemon</h1>
      <ul>
        {favourites.map((item, index) => (
          <li key={index}>
            <Link href={`/pokemon/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavouritesView;
