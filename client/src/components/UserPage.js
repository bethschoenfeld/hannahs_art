import React, { Component } from 'react'
import styled from 'styled-components'
import UserList from './UserList.js'
import UserForm from './UserForm.js'
import axios from 'axios'

const UserPageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
height: 100vh;

h1{ 
font-family: 'Raleway', serif;
}
`

class UserPage extends Component {
    state = {
        users: [
            {
                username: ""
            }
        ]
    }
    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }

    createUser = async () => {
        const response = await axios.post(`/api/users`)
        const newUser = response.data

        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({ users: newUser })
    }

    deleteUser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)
            const indexToDelete = this.state.users.indexOf(user)
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({ users: newUsers })
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = (user, event) => {
        const updatedUsers = [this.state.users]
        const userToUpdate = updatedUsers.find((newUser) => {
            return newUser._id === user._id
        })
        userToUpdate[event.target.name] = event.target.value
        this.setState({ users: updatedUsers })
    }
    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <UserPageWrapper>
                <h1>Artist Page</h1>
                <UserList users={this.state.users}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                />
                <UserForm createUser={this.createUser}
                />
            </UserPageWrapper >
        )
    }
}

export default UserPage