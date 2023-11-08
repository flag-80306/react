function Header({episodeId, title}) {
    return (
        <header>
            <h2>Star Wars Episode {episodeId} - {title}</h2>
        </header>
    )
}

export default Header;