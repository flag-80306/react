function FruitList() {
    const fruits = [
        "Apples",
        "Bananas",
        "Oranges",
        "Pears",
        "Pineapple"
    ]

    function fruitItems() {
        const items = fruits.map((item, index) => <li key={index}>{item}</li>)
        return items
    }

    return (
        <>
            <ul>
                { fruitItems() }
            </ul>
        </>
    )
}

export default FruitList;