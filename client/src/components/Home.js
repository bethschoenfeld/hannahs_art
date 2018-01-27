import React, { Component } from 'react'
import styled from 'styled-components'
import UserPage from './UserPage'
import { Redirect } from 'react-router-dom'

const HomePageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h1{ 
font-family: 'Raleway', serif;
}
`

class Home extends Component {
    render() {
        return (
            <HomePageWrapper>
                <div>
                    <h1>Welome!</h1>
                    <button onClick={this.UserPage}>
                    Enter Site
                    </button>
                </div>
            </HomePageWrapper>
        )
    }
}
export default Home