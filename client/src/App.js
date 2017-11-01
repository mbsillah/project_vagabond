import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import axios from "axios"
import HomePage from "./components/HomePage"


const SplashPage = styled.div`
  text-align: center;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 20px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #bddfeb;
  opacity: .8;
  padding: 20px 0px 20px 0px;
  letter-spacing: 5px;
  margin-top: 0px;
`

class App extends Component {
  // setting initial state
  state = {
  cities: []
}

  // getting list of cities and setting state
  async componentWillMount() {
    try {
      const response = await axios.get("/api/cities")
      this.setState({cities: response.data})

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
      <SplashPage>Project Vagabond</SplashPage>
      <Switch>
        <Route exact path="/home" render={HomePageComponent} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
