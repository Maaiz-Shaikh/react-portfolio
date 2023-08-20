import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import your custom CSS for NavBar styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
