import { useSelector } from "react-redux";

function CounterDisplay() {
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="counterDisplay">{counter}</div>
    </>
  );
}

export default CounterDisplay;
