function CounterButton({onSmash, buttonLabel = "[placeholder]"}) {
    function handleIt() {
        onSmash()
    }

    return (
        <>
            <button onClick={handleIt}>{ buttonLabel }</button>
        </>
    )
}

export default CounterButton