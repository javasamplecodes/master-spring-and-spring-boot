import './Counter.css'
import {useState} from "react";
import PropTypes from "prop-types";

export default function Counter({by}) {

    //[0, ƒ]
    //const [firstElt, secondElt] = array
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

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 5
}