import React from 'react';
import './Header.scss';
import '../../scss/variables.scss';

const Header = () => {
    return (
        <header className="container">
                <div className="header__logo-cart">
                    <h2>Logo</h2>
                    <h2>Cart</h2>
                </div>
                <h1 className="header__title">Mono</h1>
            </header>
    )
};

export default Header;