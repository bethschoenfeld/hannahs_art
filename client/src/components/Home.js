import React, { Component } from 'react'
import styled from 'styled-components'
import UserPage from './UserPage'
import { Route } from 'react-router-dom'

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
                    <h1>Welome!</h1>
                    <Route render={({history}) => (
                    <button type='button' onClick={() => { history.push('/users') }}>
                    Enter Site
                    </button>
                    )} />
                </div>
            </HomePageWrapper>
        )
    }
}
export default Home