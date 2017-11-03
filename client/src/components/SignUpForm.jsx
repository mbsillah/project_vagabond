import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const SectionText = styled.h2`
    font-size: 20px;
    font-family: 'Cabin Condensed', sans-serif;
`
const FormText = styled.h3`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 20px;
    padding-top: 10px;
`

const SignUpButton = styled.button`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 14px;
    margin-top: 10px;
    background-color: #c3cbd8;


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
        this.setState({ redirectToHomePage: true, newUserId: res.data.id})
    }

    render() {
        if (this.state.redirectToHomePage) {
            return <Redirect to={'/home'} />
        }
        return (
            <div>
          
                <SectionText> Sign-Up </SectionText>
   
            <FormText>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="username">Username: </label>
            <input onChange={this.handleChange} name="username" type="text" value={this.state.newUser.username} />
            </div>
            <div>
            <label htmlFor="current_city">Current City: </label>
            <input onChange={this.handleChange} name="current_city" type="text" value={this.state.newUser.current_city} />
            </div>
            <SignUpButton> Sign Up </SignUpButton>
            </form>
            </FormText>
          

            </div>
        );
    }
}

export default SignUpForm;