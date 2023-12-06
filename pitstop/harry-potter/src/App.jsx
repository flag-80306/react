import { Link, Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import BookInfoView from "./views/BookInfoView";

function App() {
  return (
    <>
      <nav>
        <Link href="/">HOME PAGE</Link> |<Link href="/about">ABOUT VIEW</Link>
      </nav>
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/books/:titleSlug" component={BookInfoView} />
        <Route>
          <h2>404</h2>
          <p>looks like that page does not exist</p>
          <p>use the navigation on top instead</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
