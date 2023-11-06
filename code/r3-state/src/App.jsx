import { useState } from "react"

// TPC
// fazer um botao para descer o contador
// fazer um botao para subir o contador + 10
// fazer um botao para descer o contador - 10


function App() {
  function clickHandler() {
    setCount(count + 1)
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <div>{ count }</div>
      <button onClick={ clickHandler }>Minus 10</button>
      <button >Minus 1</button>
      <button >Plus 1</button>
      <button >Plus 10</button>
    </>
  )
}

export default App
