import { NavLink } from 'react-router-dom';
import '../css/main.css';
export default function Nav() {
    return (
        <nav>
            <h1>logo</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}   