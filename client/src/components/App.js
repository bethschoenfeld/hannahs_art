import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './Home'
import UserPage from './UserPage'
import UserList from './UserList'

// import Artwork from './Artwork'
// import styled from 'styled-components'
// import { userInfo } from 'os';
// import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/users/:userId" component={UserList} />
          </Switch>
      </Router>
    );
  }
}

export default App;
