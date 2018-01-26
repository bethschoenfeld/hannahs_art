import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


import Home from './Home'
import UserPage from './UserPage'
import UserList from './UserList'
import Artwork from './Artwork'
import styled from 'styled-components'
import { userInfo } from 'os';
import axios from 'axios';

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
      <Router>
      <AppWrapper>
        <h1>Artist Page</h1>
        <UserPage />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UserPage}/>
        <Route exact path="/user/:userId" component={UserList}/>
      </Switch>
      </AppWrapper>
      </Router>
    );
  }
}

export default App;
