import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './components/NavBar'



const SplashPage = styled.div`
  text-align: center;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 30px;
  img, .title {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .title {
    background-color: #bddfeb;
    padding: 30px 0px 30px
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
      <NavBar />
      <Switch>
      <SplashPage>Project Vagabond </SplashPage>
      </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
