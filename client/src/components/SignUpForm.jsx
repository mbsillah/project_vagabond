import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const SignUpFormStyles = styled.div`

    h2{
        text-align: center;
    }
    form {
        text-align: center;
    }


`



class SignUpForm extends Component {
    state = {
        newUser: {
            username: "",
            current_city: ""
        },
        redirectToHomePage: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        console.log(res.data)
        this.setState({ redirectToHomePage: true, newUserId: res.data._id})
    }

    render() {
        if (this.state.redirectToHomePage) {
            return <Redirect to={`/users/${this.state.newUserId}`} />
        }
        return (
            <SignUpFormStyles>
            <h2> Sign-Up </h2>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="username">Username </label>
            <input onChange={this.handleChange} name="username" type="text" value={this.state.newUser.username} />
            </div>
            <div>
            <label htmlFor="current_city">Current City </label>
            <input onChange={this.handleChange} name="current_city" type="text" value={this.state.newUser.current_city} />
            </div>
            <button> Sign Up </button>
            </form>
            </SignUpFormStyles>
        );
    }
}

export default SignUpForm;