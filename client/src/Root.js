import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import UserPage from './components/UserPage.js'
import Home from './components/Home.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UserPage}/>
        {/* <Route exact path="/user/:userid" component={}/> */}
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root