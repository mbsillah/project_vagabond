import React from 'react';
import axios from "axios"
import CityList from "./CityList"
import styled from "styled-components"

const HomeBackground = styled.div`
    background-image: url("http://passportinfoguide.com/wp-content/uploads/2013/11/passport.jpg");
    width: 100vw;
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
    padding-top: 0px;
    margin-top: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const HomePage = (props) => {
    return (
        <HomeBackground>
        
        <CityList cities={props.cities}/>
            
        </HomeBackground>
    );
};

export default HomePage;

