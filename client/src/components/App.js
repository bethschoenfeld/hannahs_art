import React, { Component } from 'react';
import UserPage from './UserPage'
import Artwork from './Artwork'
import styled from 'styled-components'

const AppWrapper = styled.div`
border: solid red 1px;
display: flex;
flex-direction: column;
justify-content: center;
background: transparent;
/* background-image: url("https://i.imgur.com/ERvObEY.png"); */
h1{
  margin: 0 auto;
  font-family: 'Raleway', serif;
  color: #333333;
}

`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Artist Page</h1>
        <UserPage />
      </AppWrapper>
    );
  }
}

export default App;
