export default function ResetButton({resetMethod: resetMethod}) {
    function resetCounterFunction() {
        resetMethod()
    }

    return (
        <div>
            <button className="resetButton"
                    onClick={resetCounterFunction}
            >Reset</button>
        </div>
    )
}