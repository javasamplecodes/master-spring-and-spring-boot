import './TodoApp.css'
import {useState} from "react";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/*<WelcomeComponent />*/}
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('omer');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleUsernameChange(event) {
        // console.log(event)
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        // console.log(username)
        // console.log(password)

        if(username === 'omer' && password === '123') {
            console.log('Authentication is successful')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            console.log('Authentication is failed!')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed.
                                                            Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}