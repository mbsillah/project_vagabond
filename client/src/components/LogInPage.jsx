import React, { Component } from 'react';
import SignUpForm from "./SignUpForm"
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const PageBackground = styled.div`
    
    padding-top: 0px;
    margin-top: 0px;
    font-family: 'Rammetto One', cursive;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const LoginHeaderText = styled.h2`
    font-size: 30px;
    text-align: center;
     text-shadow: 2px 2px white;
    margin-top: 0px;
`

const LoginSection = styled.div`
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     background-color: white;
     opacity: .8;
     padding-top: 20px;
     padding-bottom: 20px;
     margin-left: 15px;
     margin-top: 15px;
     margin-right: 15px;
     margin-bottom: 10px;  
`

const UserNameText = styled.h3`
    text-align: center;
    font-size: 30px;
`

class LogInPage extends Component {
    state = {
        users: []
    }

componentWillMount () {
    this.getAllUsers()
}

getAllUsers = async () => {
    try{
        const res = await axios.get("/api/users")
        console.log(res)
        this.setState({users: res.data})
    }catch (error) {
    console.log(error)
    }
}

    render() {
        return (
            <PageBackground>
            <LoginSection>
            <LoginHeaderText>Already have an account? Select your username from list below: </LoginHeaderText>
            <UserNameText>
            {this.state.users.map((user) => {
                return <div><Link key={user.id} to={'/home'}> {user.username} </Link></div>
            })}</UserNameText>
            </LoginSection>
            <SignUpForm />
            </PageBackground>
        );
    }
}

export default LogInPage;