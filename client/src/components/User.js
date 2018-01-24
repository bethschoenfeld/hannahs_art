import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserWrapper = styled.div`
    border: 4px solid cyan;
`

class User extends Component {
    state = {
        users: []
    }
    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }
    render() {
        return (
            <UserWrapper>
                User Component
                <div>
                {this.state.users.map((user, i) => {
                        return (
                            <div key={i}>
                                <p>{user.username}</p>
                            </div>
                        )
                    })}
                </div>
            </UserWrapper>
        )
    }
}
export default User
