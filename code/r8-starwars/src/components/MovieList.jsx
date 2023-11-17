import { useState } from "react";
import { useEffect } from "react"
import MovieCard from "./MovieCard";

function MovieList() {

    const [movieList, setMovieList] = useState([])

    useEffect(function() {
        (async function() {
            const response = await fetch("https://swapi.dev/api/films")
            const result = await response.json()
            console.log(result.results)

            setMovieList(result.results)
        })()
    }, []);

    return (
      <>
        {movieList.map(movie =>
            <MovieCard movieInfo={movie} key={movie.id} />
        )}
      </>
    )
  }
  
  export default MovieList
  