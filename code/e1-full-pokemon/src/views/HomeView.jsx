import CounterDisplay from "../components/CounterDisplay";

function HomeView() {
  return (
    <>
      <h1 className="title">Welcome to my Website!</h1>
      <div className="homepageBox">
        <CounterDisplay />
      </div>
      <h3>The End!</h3>
    </>
  );
}

export default HomeView;
