import './TodoApp.css'
import {useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}></Route>
                    <Route path="/login" element={<LoginComponent />}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
                    <Route path="*" element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('omer');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
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
            navigate(`/welcome/${username}`)
        } else {
            console.log('Authentication is failed!')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Please Login.</h1>
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
    const {username} = useParams();

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome Omer</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working on the problem.</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC.
            </div>
        </div>
    )
}