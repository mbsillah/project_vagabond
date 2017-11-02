import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"

const CityName = styled.div `
    font-family: 'Ranchers', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 1px 1px yellow;
    padding-top: 25px;

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
            <div>
                <CityName>Welcome to {this.state.city.name}</CityName>
            </div>
        );
    }
}

export default City;

