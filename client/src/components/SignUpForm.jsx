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
        font-size:22px;
    }
`

const LoginSection = styled.div`
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     background-color: white;
     opacity: .8;
     padding-top: 20px;
     padding-bottom: 20px;
     margin-top: 25px;
     margin-left: 15px;
     margin-right: 15px;
     margin-bottom: 10px; 
     font-size: 24px; 
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
            <SignUpFormStyles>
            <LoginSection>
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

            </LoginSection>

            </SignUpFormStyles>
        );
    }
}

export default SignUpForm;