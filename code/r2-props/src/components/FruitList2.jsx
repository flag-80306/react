function FruitList() {
    const fruits = [
        "Apples",
        "Bananas",
        "Oranges",
        "Pears",
        "Pineapple"
    ]

    function fruitItems() {
        const items = []
        for (let i = 0; i < fruits.length; i++) {
            items.push(<li>{fruits[i]}</li>)
        }
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