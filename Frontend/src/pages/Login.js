import { useContext, useState } from "react";
import { AppContext } from "../Hooks/appContext";

export default function Login() {
    const { state, setState } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handelChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        if (username === state.name && password === state.password) {
            setState({
                ...state,
                isLoggedIn: true
            });
            alert("You are logged in");
        }
        else {
            setState({
                ...state,
                isLoggedIn: false,
            });
            alert("You are not logged in");
        }
    }
    return (
        <div className="container">
            <h1>Login</h1>

            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={handelChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handelChange} name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
} //end Login