import { Link } from "wouter"

function Header() {
    return (
        <>
            <header>
                <h1>This is my website</h1>
                <nav>
                    <Link href="/">HOME PAGE</Link> |&nbsp; 
                    <Link href="/aboutus">ABOUT US</Link> | &nbsp;
                    <Link href="/faq">FREQUENTLY ASKED QUESTIONS</Link> | &nbsp;
                    <Link href="/pokemon">CATCH EM ALL</Link>&nbsp;
                </nav>
            </header>
        </>
    )
}

export default Header