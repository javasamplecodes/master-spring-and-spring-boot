import {Link, useParams} from "react-router-dom";
import React from "react";

function WelcomeComponent() {
    const {username} = useParams();

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome Omer</h1>
            <div>
                Manage your Todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent