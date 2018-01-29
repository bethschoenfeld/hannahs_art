import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border: 3px solid black;

    h1{ 
    font-family: 'Raleway', serif;
    font-size: 52px;

    }

    button{
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        font-size: 20px;
        border-radius: 4px;
    }

    button:hover {
        background-color: #e7e7e7;
        color: black;
        }
`
class Home extends Component {
  render() {
    return (
      <HomePageWrapper>
        <div>
          <h1>Welcome to Insta-Art!</h1>
          <button type='button' onClick={() => this.props.push('/users')} >
            Enter Site
            </button>
        </div>
      </HomePageWrapper>
    )
  }
}
export default connect(null, { push })(Home)