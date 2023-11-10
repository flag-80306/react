import { useState } from "react";

function App() {

  const [name, setName] = useState("[whatver your name is]");

  function changeHandler(event) {
    setName(event.target.value);
  }

  return (
    <>
      <input type="text" placeholder="name" onChange={changeHandler} />
      <p>Hello {name}</p>
    </>
  )
}

export default App