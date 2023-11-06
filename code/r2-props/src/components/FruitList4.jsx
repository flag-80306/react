function FruitList() {
    const fruits = [
        "Apples",
        "Bananas",
        "Oranges",
        "Pears",
        "Pineapple"
    ]

    return (
        <>
            <ul>
                { fruits.map((item, index) => {
                   return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default FruitList;