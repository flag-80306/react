import { useState } from "react"
import CounterDisplay from "./components/CounterDisplay"
import CounterButton from "./components/CounterButton"

function App() {

  function handleButtonUp(value) {
    if (value) {
      setCounter(counter + value)
    } else {
      setCounter(counter + 1)
    }
  }

  const [counter, setCounter] = useState(0)

  return (
    <>
      <CounterDisplay counter={counter} />
      <br />
      <CounterButton onSmash={handleButtonUp} />
    </>
  )
}

export default App
