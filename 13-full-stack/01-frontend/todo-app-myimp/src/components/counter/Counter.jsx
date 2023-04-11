import './Counter.css'
import {useState} from "react";
import PropTypes from "prop-types";

export default function Counter() {
    //[0, ƒ]
    //const [firstElt, secondElt] = array
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}/>
            <CounterButton by={2}/>
            <CounterButton by={5}/>
        </>

    )
}

function CounterButton({by}) {
    const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounterFunction() {
        setCount(count + by)
        console.log("inc. " + count)
    }

    function decrementCounterFunction() {
        setCount(count - by)
        console.log("decr. " + count)
    }

    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                        onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton"
                        onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}