import './Counter.css'
import {useState} from "react";

export default function Counter() {

    //[0, ƒ]
    //const [firstElt, secondElt] = array
    const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        setCount(count + 1)
        console.log(count)
    }

    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                        onClick={incrementCounterFunction}
                >+1</button>
            </div>
        </div>
    )
}