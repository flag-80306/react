import Character from "./Character"

function MovieCard({movieInfo}) {

  return (
    <>
        <div className="movieCard">
            <h2>{movieInfo.title}</h2>
            <p>{movieInfo.opening_crawl}</p>
            <ul>
                {movieInfo.characters.map(characterURL => 
                    <li key={characterURL}>
                        <Character url={characterURL} />
                    </li>  
                )}
            </ul>
        </div>      
    </>
  )
}

export default MovieCard
