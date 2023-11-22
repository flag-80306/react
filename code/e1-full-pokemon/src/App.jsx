import { Route, Switch } from "wouter";

import HomeView from "./views/HomeView";
import CounterView from "./views/CounterView";
import PokemonView from "./views/PokemonView";
import PokemonDetailView from "./views/PokemonDetailView";
import FavouritesView from "./views/FavouritesView";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/counter" component={CounterView} />
        <Route path="/pokemon" component={PokemonView} />
        <Route path="/pokemon/:name" component={PokemonDetailView} />
        <Route path="/fav" component={FavouritesView} />
      </Switch>
    </>
  );
}

export default App;
