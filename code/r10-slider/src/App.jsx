import { useState } from "react"

function App() {

  function handleRangeChange(event) {
    setValue(event.target.value)
  }

  function handleNumberChange(event) {
    setValue(event.target.value)
  }

  const [value, setValue] = useState(0)

  return (
    <>
      <div>{ value }</div>

      <input type="range" min="0" max="100" value={value} onChange={handleRangeChange} />
      <br />
      <input type="number" value={value} onChange={handleNumberChange} />
    </>
  )
}

export default App
