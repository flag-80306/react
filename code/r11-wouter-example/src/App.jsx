import { Link, Route, Switch } from "wouter" // npm i wouter

import AboutView from "./views/AboutView"
import HomeView from "./views/HomeView"
import FAQView from "./views/FAQView"
import NotFoundView from "./views/NotFoundView"
import PokeView from "./views/PokeView"
import PokeInfoView from "./views/PokeInfoView"

function App() {

  return (
    <>
      <h1>This is my website</h1>
      <nav>
        <Link href="/">HOME PAGE</Link> |&nbsp; 
        <Link href="/aboutus">ABOUT US</Link> | &nbsp;
        <Link href="/faq">FREQUENTLY ASKED QUESTIONS</Link> | &nbsp;
        <Link href="/pokemon">CATCH EM ALL</Link>&nbsp;
      </nav>

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
      <footer>
        This is the footer...
      </footer>
    </>
  )
}

export default App
