import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    return(
        <main className="container font-text">
            <h2 className="title">Home</h2>
            <div className="home__imgs-container">
                <Link to="/make">
                    <img src="assets/make.jpg" alt="Vehicle make img"/>
                </Link>
                <Link to="/model">
                    <img src="assets/model.jpg" alt="Vehicle model img" height="300px" width="400px"/>
                </Link>
            </div>
        </main>
    );
};

export default Home;