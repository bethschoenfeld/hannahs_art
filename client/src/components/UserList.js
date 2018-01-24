import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'

const UserListWrapper = styled.div`
border: solid green 1px;
`

class UserList extends Component {
    render() {
        return (
            <UserListWrapper>
                UserList Component
                <User />
            </UserListWrapper>
        )
    }
}

export default UserList