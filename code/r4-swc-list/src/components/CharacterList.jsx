import empireData from "../services/empireData";

function CharacterList() {
    
    console.log(empireData)

    return (
        <section>
            <ul>
                {/* {characters.map(function(character) {
                    return <li>{ character }</li>
                })} */}
            </ul>
        </section>
    )
}

export default CharacterList;