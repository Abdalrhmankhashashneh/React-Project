import { NavLink, useNavigate } from 'react-router-dom';
import '../css/main.css';
import { useContext } from "react";
import { AppContext } from "../Hooks/appContext";
export default function Nav() {
    const { userState, setUser, registerHandler, logged_user, setLogged_user, logoutHandler, loggin_user,setLoggin_user, loginHandler } = useContext(AppContext);

    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        setLogged_user(!logged_user);
        logoutHandler(navigate);
    }
    return (
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><NavLink to="/">Restaurantly</NavLink></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                        <li><NavLink className="navlink- scrollto" to="/contact">Contact</NavLink></li>
                       
                        
                        {!localStorage.getItem('logged_user') ? 
                        <>
                        <li><NavLink className="nav-link scrollto" to="/login">Login</NavLink></li>
                        <li><NavLink className="nav-link scrollto" to="/register">Register</NavLink></li>
                        </>
                        :
                        <>
                          <li><NavLink className="nav-link scrollto" to="/profile">Profile</NavLink></li>
                        <li><button className="nav-link scrollto logout" onClick={clickHandler}>Logout</button></li>
                      
                        </>
                        }
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <NavLink to="/floor" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</NavLink> */}

            </div>
        </header>
    );
}




{/* <li className="dropdown"><NavLink to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></NavLink>
                        <ul>
                            <li><NavLink to="/">Drop Down 1</NavLink></li>
                            <li className="dropdown"><NavLink to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                                <ul>
                                    <li><NavLink to="/">Deep Drop Down 1</NavLink></li>
                                    <li><NavLink to="/">Deep Drop Down 2</NavLink></li>
                                    <li><NavLink to="/">Deep Drop Down 3</NavLink></li>
                                    <li><NavLink to="/">Deep Drop Down 4</NavLink></li>
                                    <li><NavLink to="/">Deep Drop Down 5</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/">Drop Down 2</NavLink></li>
                            <li><NavLink to="/">Drop Down 3</NavLink></li>
                            <li><NavLink to="/">Drop Down 4</NavLink></li>
                        </ul>
                    </li> */}