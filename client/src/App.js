import React, { Component } from 'react';
import styled from 'styled-components'

const SplashPage = styled.div`
  text-align: center;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 30px;
  img {
    width: 100%
  }

 
`

class App extends Component {
  render() {
    return (
      <SplashPage>
        <h1>Project Vagabond: </h1>
        <img src="http://passportinfoguide.com/wp-content/uploads/2013/11/passport.jpg" alt="passport"/>
      </SplashPage>

    );
  }
}

export default App;
