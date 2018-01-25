import React, { Component } from 'react'
import styled from 'styled-components'
import UserList from './UserList.js'
import UserForm from './UserForm.js'
import axios from 'axios'


const UserPageWrapper = styled.div`
    border: 4px solid blue;
`
const createUser = async () => {
    const response = await axios.post(`/api/user`)
    const newUser = response.data

    const newUsers = [...this.state.users]
    newUsers.unshift(newUser)
    this.setState({ users: newUser })
}

class UserPage extends Component {
    render() {
        return (
        < UserPageWrapper >
            UserPage Component
            <button onClick={this.createUser}>New User</button>
                < UserList />
        </UserPageWrapper >
        )
    }
}

export default UserPage