import React from 'react'
import styled from 'styled-components'
import User from './User'

const UserListWrapper = styled.div`
border: solid green 4px;
`

const UserList = (props) => {
    return (
        <UserListWrapper>
            UserList Component
            {props.users.map((user, i) => {
                return (
                    <User user={user} {...props} key={user._id} />
                )
            })}
        </UserListWrapper>
    )
}


export default UserList