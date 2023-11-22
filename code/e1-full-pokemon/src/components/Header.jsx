import { Link } from "wouter";

import CounterDisplay from "./CounterDisplay";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Homepage</Link>
          <Link href="/counter">Counter</Link>
          <Link href="/pokemon">Pokemon</Link>
          <Link href="/fav">Favourites</Link>
        </nav>
        <div>
          <CounterDisplay />
        </div>
      </header>
    </>
  );
}

export default Header;
