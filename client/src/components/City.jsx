import React, { Component } from 'react';
import axios from "axios";


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
                {this.state.city.name}
            </div>
        );
    }
}

export default City;

