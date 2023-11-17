import { useEffect, useState } from "react"

function Character({url}) {
    
    const [characterInfo, setCharacterInfo] = useState({
        name: "Loading..."
    })

    useEffect(function() {
        (async function() {
            const response = await fetch(url)
            const result = await response.json()

            // console.log(result)
            setCharacterInfo(result)
        })()
    }, [url])

    return (
        <>
            { url }
            <br />
            {characterInfo.name}
        </>
    )
}

export default Character