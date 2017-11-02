import React from 'react';
import axios from "axios"
import CityList from "./CityList"


const HomePage = (props) => {
    return (
        <div>
        
        <CityList cities={props.cities}/>
            
        </div>
    );
};

export default HomePage;