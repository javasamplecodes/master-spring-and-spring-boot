import './Counter.css'
import {useState} from "react";

export default function Counter() {

    //[0, ƒ]
    const state = useState(0);

    function incrementCounterFunction() {
        state[1](state[0] + 1)

        console.log(state[0])
        console.log(state[1])
        console.log('increment clicked')
    }

    return(
        <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton"
                        onClick={incrementCounterFunction}
                >+1</button>
            </div>
        </div>
    )
}