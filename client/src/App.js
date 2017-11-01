import React, { Component } from 'react';
import styled from 'styled-components'

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
      <SplashPage>
        <h1 className="title">Project Vagabond: </h1>
        <img src="http://passportinfoguide.com/wp-content/uploads/2013/11/passport.jpg" alt="passport"/>
      </SplashPage>

    );
  }
}

export default App;
