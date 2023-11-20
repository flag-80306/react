import { Link, Route, Switch } from "wouter" // npm i wouter

import AboutView from "./views/AboutView"
import HomeView from "./views/HomeView"
import FAQView from "./views/FAQView"
import NotFoundView from "./views/NotFoundView"
import PokeView from "./views/PokeView"
import PokeInfoView from "./views/PokeInfoView"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <div id="mainWrapper">
        <Switch>
          <Route path="/">
            <HomeView />
          </Route>
          <Route path="/aboutus">
            <AboutView />
          </Route>
          <Route path="/faq">
            <FAQView />
          </Route>
          <Route path="/pokemon" component={PokeView} />
          {/* <Route path="/pokemon/:name">
            { params => <PokeInfoView params={params}/> }
          </Route> */}
          <Route path="/pokemon/:name" component={PokeInfoView} />
          <Route component={NotFoundView} /> {/* Exemplo para mostrar 2 formas diferentes de colocar Views*/}
        </Switch>
      </div>
      <footer>
        <div>Copyright Pokemons e tal &copy;</div>
      </footer>
    </>
  )
}

export default App
