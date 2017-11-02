import React from 'react';
import axios from "axios"
import CityList from "./CityList"
import styled from "styled-components"

const HomeBackground = styled.div`

    font-family: 'Rammetto One', cursive;
`

const WelcomeText = styled.h1`
    font-size: 50px;
    text-shadow: 2px 2px white;
    text-align: center;
    margin-top: 0px;
    padding-top: 30px;
`

const CityText = styled.h2`
    font-size: 40px;
    text-align: center;
     text-shadow: 2px 2px white;
`

const HomePage = (props) => {
    return (
        <HomeBackground>
        <WelcomeText>Welcome to Project Vagabond </WelcomeText>
        <CityText>View our portfolio of cities below </CityText>
        <CityList cities={props.cities}/>
            
        </HomeBackground>
    );
};

export default HomePage;

