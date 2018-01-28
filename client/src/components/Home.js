import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1{ 
    font-family: 'Raleway', serif;

    }

    button{
        background-color: #e7e7e7;
        color: black;
        border: 2px solid #e7e7e7;
    }

    button:hover {
        background-color: white;
        }
`
class Home extends Component {
  render() {
    return (
      <HomePageWrapper>
        <div>
          <h1>Welcome!</h1>
            <button type='button' onClick={() => this.props.push('/users')} >
              Enter Site
            </button>
        </div>
      </HomePageWrapper>
    )
  }
}
export default connect(null, {push})(Home)