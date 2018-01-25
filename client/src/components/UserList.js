import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'

const UserListWrapper = styled.div`
border: solid green 4px;
`

class UserList extends Component {
    render() {
        return (
            <UserListWrapper>
                UserList Component
                <User />
                <div>
                    {this.state.users.map((users, i) => {
                        return (
                            <div key={i}>
                                <p>{users.username}</p>
                            </div>
                        )
                    })}
                </div>

            </UserListWrapper>
        )
    }
}

export default UserList