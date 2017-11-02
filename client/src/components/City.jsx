import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"

const CityBackground = styled.div `

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 400px;
        background-repeat: no-repeat;
        padding-top: 0px;
        margin-top: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
  `

const CityName = styled.div `
    font-family: 'Ranchers', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 1px 1px yellow;
    padding-top: 25px;
`
const CityDetails = styled.div `
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const CityBody = styled.div `
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`


class City extends Component {

    state = {
        city: {}
    }


async componentWillMount(){
    try {
        const { id } = this.props.match.params
        const response = await axios.get(`/api/cities/${id}`)

        this.setState({city: response.data})


    } catch(error) {
        console.log(error)
    }
}

    render() {

    

        return (
            <CityBackground>
            <img src={this.state.city.photo_url} />
            <br />
            <CityBody>
                <CityName>Welcome to {this.state.city.name}</CityName>
                <CityDetails>
                <div>Population: {this.state.city.population}</div>
                <div>About: {this.state.city.description}</div>
                </CityDetails>
                     </CityBody>
            </CityBackground>
        );
    }
}

export default City;

