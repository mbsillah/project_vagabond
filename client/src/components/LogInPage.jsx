import React, { Component } from 'react';
import SignUpForm from "./SignUpForm"
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            <div>
            <h3>Already have an account? Select your username from list below: </h3>
            {this.state.users.map((user) => {
                return <Link key={user.id} to={'/home'}> {user.username} </Link>
            })}
            <SignUpForm />
                
            </div>
        );
    }
}

export default LogInPage;