function FruitList() {
    const fruitItems = [
        <li key={0}>Apples</li>,
        <li key={1}>Bananas</li>,
        <li key={2}>Oranges</li>,
        <li key={3}>Pears</li>,
        <li key={4}>Pineapple</li>
    ]

    return (
        <>
            <ul>
                { fruitItems }
            </ul>
        </>
    )
}

export default FruitList;