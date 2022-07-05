import { useContext, useState } from "react";
import { AppContext } from "../Hooks/appContext";
export default function Register() {
    const { state, setState } = useContext(AppContext);
    const handelChange = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(state.user);
    }



    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="name" onChange={handelChange} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handelChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handelChange} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" onChange={handelChange} name="confirmPassword" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
} //end Register