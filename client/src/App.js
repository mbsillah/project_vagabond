import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'

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
  render() {
    return (
      <Router>
        <div>
        <NavBar />
      <SplashPage>Project Vagabond</SplashPage>
      <Switch>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
