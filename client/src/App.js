import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import axios from "axios"
import HomePage from "./components/HomePage"
import City from "./components/City"
import LogInPage from "./components/LogInPage"
import SplashPage from "./components/SplashPage"


const TitleText = styled.div`
  text-align: center;
  font-family: 'Ranchers', cursive;  
  font-size: 28px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #bddfeb;
  opacity: .8;
  padding: 10px 0px 10px 0px;
  letter-spacing: 5px;
  margin-top: 0px;
  margin-bottom: 10px;
`

class App extends Component {
  // setting initial state
  state = {
  cities: [],
  users: []
}

  // getting list of cities and setting state
  async componentWillMount() {
    try {
      const response = await axios.get("/api/cities")
      this.setState({cities: response.data})
      const userResponse = await axios.get("/api/users")

    } catch(error) {
      console.log(error)
    }
  }


  render() {
    const HomePageComponent = () => (<HomePage cities={this.state.cities}/>)
    return (
      <Router>
        <div>
        <NavBar />
      <Switch>
        <Route exact path="/" render={SplashPage} />
        <Route exact path="/home" render={HomePageComponent} />
        <Route exact path="/cities/:id" component={City} />
        <Route exact path="/login" component={LogInPage} />

      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
