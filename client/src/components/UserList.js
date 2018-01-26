import React from 'react'
import styled from 'styled-components'
import User from './User'

const UserListWrapper = styled.div`
border: solid green 1px;
`

const UserList = (props) => {
    return (
        <UserListWrapper>
            UserList Component
            {props.users.map((user, i) => {
                return (
                    <User user={user} {...props} key={i} />
                )
            })}
        </UserListWrapper>
    )
}


export default UserList