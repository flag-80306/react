function CounterButton({onSmash}) {
    function handleIt() {
        onSmash()
    }

    return (
        <>
            <button onClick={handleIt}>GO UP</button>
        </>
    )
}

export default CounterButton