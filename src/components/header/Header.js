import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="container font-text">
                <div className="header">
                    <Link to="/" className="link">
                        <h1 className="header__logo">Mono</h1>
                    </Link>
                    <nav>
                    <ul className="header__nav">
                        <Link to="/" className="link header__nav__link">
                            <li>Home</li>
                        </Link>
                        <Link to="/make" className="link header__nav__link">
                            <li>Make</li>
                        </Link>
                        <Link to="/model" className="link header__nav__link">
                            <li>Model</li>
                        </Link>
                    </ul>
                    </nav>
                </div>
            </header>
    )
};

export default Header;