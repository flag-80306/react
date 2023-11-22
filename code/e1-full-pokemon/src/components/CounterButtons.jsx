import { useDispatch } from "react-redux";
import { incrementBy } from "../app/counterSlice";

function CounterButtons() {
  const dispatch = useDispatch();

  function buttonClicked(value) {
    dispatch(incrementBy(value));
  }

  return (
    <>
      <button onClick={() => buttonClicked(-10)}>- 10</button>
      <button onClick={() => buttonClicked(-1)}>- 1</button>
      <button onClick={() => buttonClicked(1)}>+ 1</button>
      <button onClick={() => buttonClicked(10)}>+ 10</button>
    </>
  );
}

export default CounterButtons;
