import { useState } from "react"

// TPC
// fazer um botao para descer o contador
// fazer um botao para subir o contador + 10
// fazer um botao para descer o contador - 10


function App() {
  function subtract10() {
    setCount(count - 10)
  }

  function subtract1() {
    setCount(count - 1)
  }

  function add1() {
    setCount(count + 1)
  }

  function add10() {
    setCount(count + 10)
  }

  function reset() {
    setCount(0)
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <div>{ count }</div>
      <button onClick={ subtract10 }>Minus 10</button>
      <button onClick={ subtract1 }>Minus 1</button>
      <button onClick={ add1 }>Plus 1</button>
      <button onClick={ add10 }>Plus 10</button>
      <button onClick={ reset }>Back to Zero!</button>
    </>
  )
}

export default App
