function App() {
  async function clickHandler() {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const response = await fetch(url);
    const result = await response.json();
    
    console.log(result);
  }

  return (
    <>
      <button onClick={clickHandler}>GOTTA CATCH EM ALL!!!!</button>
    </>
  )
}

export default App
