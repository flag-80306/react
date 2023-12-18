import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView.jsx";
import DetailView from "./views/DetailView.jsx";

function App() {
  return (
    <>
      <h1>HEADER!!!!</h1>
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
        <Route path="/details/:id">
          {(params) => <DetailView id={params.id} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
