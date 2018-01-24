import React, { Component } from 'react'
import styled from 'styled-components'
import UserList from './UserList.js'

const UserPageWrapper = styled.div`
    border: 1px solid blue;
`

class UserPage extends Component {
    render() {
        return (
            <UserPageWrapper>
                UserPage Component
                <UserList />
            </UserPageWrapper>
        )
    }
}

export default UserPage