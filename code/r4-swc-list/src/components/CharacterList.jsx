function CharacterList({characters}) {

    return (
        <>
            <section>
                <h4>Characters:</h4>
                <ul>
                    {characters.map(function(character) {
                        return <li>{ character }</li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default CharacterList;