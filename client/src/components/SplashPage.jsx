import React from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SplashBackground = styled.div`
    background-image: url("http://passportinfoguide.com/wp-content/uploads/2013/11/passport.jpg");
    width: 100vw;
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
    padding-top: 0px;
    margin-top: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     font-family: 'Ranchers', cursive;
     text-align: center;
`

const SplashHeader = styled.div`
    font-size: 38px;
`

const SplashLink = styled.div`
    font-size: 24px;
`

const SplashPage = (props) => {
    return (
        <SplashBackground>
            <SplashHeader> Welcome to Project Vagabond </SplashHeader>    
            <SplashLink><Link to={"/login"}> Log In or Sign Up </Link></SplashLink>

        </SplashBackground>
    );
};

export default SplashPage;