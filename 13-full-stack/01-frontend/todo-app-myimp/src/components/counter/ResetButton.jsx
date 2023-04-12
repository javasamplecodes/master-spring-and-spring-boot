export default function ResetButton({resetMethod}) {
    // function resetCounterFunction() {
    //     resetMethod()
    // }

    return (
        <div>
            <button className="resetButton"
                    onClick={() => resetMethod()}
            >Reset</button>
        </div>
    )
}