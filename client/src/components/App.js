import React, { Component } from 'react';
import UserPage from './UserPage'
// import Product from './Product'
import styled from 'styled-components'

const AppWrapper = styled.div`
border: solid red 4px;`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <p>I'm the app Component!</p>
        <UserPage />
      </AppWrapper>
    );
  }
}

export default App;
