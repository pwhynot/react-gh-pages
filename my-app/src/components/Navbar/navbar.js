import React from 'react';

const score = 0;
const highScore = 0;

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            Score: {score} | High Score: {highScore}
        </nav>
    )
}

export default Navbar;