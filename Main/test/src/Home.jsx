import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>HOME</h1>
            <Link to='/about'>About</Link>
        </>
    );
}

export default Home;