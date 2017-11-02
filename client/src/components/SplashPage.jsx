import React from 'react';
import axios from "axios"
import { Link } from "react-router-dom"



const SplashPage = (props) => {
    return (
        <div>
            <h1> Welcome to Project Vagabond </h1>    
            <Link to={"/login"}> Log In or Sign Up </Link>

        </div>
    );
};

export default SplashPage;