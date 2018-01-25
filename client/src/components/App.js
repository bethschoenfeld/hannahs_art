import React, { Component } from 'react';
import UserPage from './UserPage'
// import Product from './Product'
import styled from 'styled-components'

const AppWrapper = styled.div`
border: solid red 1px;
font-family: Raleway;
display: flex;
flex-direction: column;
justify-content: center;
h1{
  align-content: center;
}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Hannah White</h1>
        <h2>-Visual Artist-</h2>
        <UserPage />
      </AppWrapper>
    );
  }
}

export default App;
