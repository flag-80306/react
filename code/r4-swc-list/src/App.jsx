import empireData from "./services/empireData";

import Header from "./components/Header"
import CharacterList from "./components/CharacterList"
import OpeningCrawl from "./components/OpeningCrawl"

function App() {

  const {
    episode_id: episodeId,
    title,
    opening_crawl: openingCrawl,
    characters
  } = empireData;

  return (
    <>
      <Header episodeId={episodeId} title={title} />
      <OpeningCrawl openingCrawl={openingCrawl} />
      <CharacterList characters={characters} />
    </>
  )
}

export default App
