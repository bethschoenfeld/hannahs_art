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

    // createUser = async () => {
    //     const payload = this.state.newUser
        
    //     const response = await axios.post(`/api/users`, payload)
    //     const newUserFromForm = response.data
    //     console.log(newUserFromForm, response)

    //     const newUsersArray = [...this.state.users]
    //     newUsersArray.unshift(newUserFromForm)
    //     this.setState({ users: newUsersArray })
    // }

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
    // updateUser = async (user) => {
    //     try {
    //         await axios.patch(`/api/users/${user._id}`, user)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render() {
        return (
            <UserPageWrapper>
                <h1>Artist Page</h1>

                {/* <UserForm createUser={this.createUser} */}
                />
                <UserList users={this.state.users}
                    handleChange={this.handleChange}
                    // updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                />
            </UserPageWrapper >
        )
    }
}

export default UserPage