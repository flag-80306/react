import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";

function CounterView() {
  return (
    <>
      <h1 className="title">The Beautiful Counter</h1>
      <div>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </>
  );
}

export default CounterView;
