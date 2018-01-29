import React, { Component } from 'react'
import styled from 'styled-components'
import UserList from './UserList.js'
import UserForm from './UserForm.js'

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    h1{ 
    font-family: 'Raleway', serif;
    }



    /* {
        background-color: #e7e7e7;
        color: black;
        border: 2px solid #e7e7e7;
    } */
`
class UserPage extends Component {
    render() {
        return (
            <UserPageWrapper>
                <h1>Artist Page</h1>
                <UserList />
                <UserForm />
            </UserPageWrapper >
        )
    }
}
export default UserPage