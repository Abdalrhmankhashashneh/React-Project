import { NavLink } from 'react-router-dom';
import '../css/main.css';
export default function Nav() {
    return (
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><NavLink to="/">Restaurantly</NavLink></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link scrollto" to="/login">Login</NavLink></li>

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
                        <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <NavLink to="/" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</NavLink>

            </div>
        </header>
    );
}   