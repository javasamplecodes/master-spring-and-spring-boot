import {useState} from "react";
import PropTypes from "prop-types";

export default function CounterButton({by, incrementMethod, decrementMethod}) {
    const [count, setCount] = useState(0);

    // console.log(by)

    function incrementCounterFunction() {
        //setCount(count + by)
        incrementMethod(by)
        // console.log("inc. " + count)
    }

    function decrementCounterFunction() {
        //setCount(count - by)
        decrementMethod(by)
        // console.log("decr. " + count)
    }

    return(
        <div className="Counter">
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