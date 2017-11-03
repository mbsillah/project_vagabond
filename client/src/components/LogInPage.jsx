import React, { Component } from 'react';
import SignUpForm from "./SignUpForm"
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const LoginContainer = styled.div`
     box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 22px 0 rgba(0, 0, 0, 0.29);
     height: 450px;
     width: 60%;
     text-align: center;
     margin-left: 20%;
     margin-right: 20%;
     background-color:rgba(244, 245, 247,.7);
`

const LoginBox = styled.div`
  position: relative;
  margin: 5% auto;
  width: 600px;
  height: 250px;
  background: white;
  border-radius: 2px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 22px 0 rgba(0, 0, 0, 0.29);
`

const IntroTextBox = styled.div`
    position: relative;
    margin: 5% auto;
    width: 600px;

`

const SignUpSection = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 30px;
    background-color: rgba(249, 168, 74, .5);
`

const SignInSection = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 30px;
    background-color: rgba(255,255,224, .5);
`

const IntroText = styled.div`
    font-size: 28px;
    text-align: center;
    font-family: 'Cabin Condensed', sans-serif;
    opacity: .9;
    padding-top: 10px;
   
`

const SectionText = styled.h2`
    font-size: 20px;
    font-family: 'Cabin Condensed', sans-serif;
`

const UsernameList = styled.div`
    padding-top: 10px;
    a:hover {
        font-size: 22px;
    }
    div {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`

const OrCircle = styled.div` 
  position: absolute;
  top: 45%;
  right: 48%;
  width: 40px;
  height: 40px;
  background-color: #c3cbd8;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  line-height: 40px;
  text-align: center;
    font-family: 'Cabin Condensed', sans-serif;
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
            <LoginContainer>
           
            <IntroTextBox><IntroText> Please log in or create an account before exploring Project Vagabond </IntroText></IntroTextBox>
            <LoginBox>
                <SignInSection>
                    <SectionText> Select username below: 
                    <UsernameList>
                    {this.state.users.map((user) => {
                        return <div><Link key={user.id} to={'/home'}> {user.username} </Link></div>
                    })}
                    </UsernameList>
                    </SectionText>
                </SignInSection>

                <SignUpSection>
                <SignUpForm />
                </SignUpSection>
            </LoginBox>
            <OrCircle>OR</OrCircle>
            </LoginContainer>
        
        );
    }
}

export default LogInPage;