import React, { Component } from 'react';
import styled from 'styled-components'

const SplashPage = styled.div`
  text-align: center;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 20px;

.title {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #bddfeb;
    opacity: .8;
    padding: 20px 0px 20px 0px;
    letter-spacing: 5px;
  }
`

class App extends Component {
  render() {
    return (
      <SplashPage>
        <h1 className="title">Project Vagabond </h1>

      </SplashPage>

    );
  }
}

export default App;
