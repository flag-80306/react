import Card from "./Card";

const x = [
    <Card key={1} />,
    <Card key={2} />,
    <div key={3}>
        <table>
            <tr>
                <th>name</th>
                <th>name</th>
            </tr>
            <tr>
                <td>joe</td>
                <td>blow</td>
            </tr>
        </table>
    </div>
]

function lala() {
    return x
}

function CardContainer() {
    return (
        <>
            <div className="cardContainer">
                { lala() }
            </div>
        </>
    )
}

export default CardContainer;