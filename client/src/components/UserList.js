import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const UserListWrapper = styled.div`
border: solid green 1px;
`
const UserWrapper = styled.div`
border: 1px solid cyan;
`

const UserList = (props) => {
    return (
        <UserListWrapper>
            UserList Component
            {props.users.map((user, i) => {
                return (
                    <UserWrapper>
                        <a href={user._id}>
                            {user.username}
                        </a>
                            {/* <input key={i} type="text"
                            name="username"
                            value={user.username}
                            onChange={(event) => props.handleChange(props.user, event)}
                            onBlur={() => { props.updateUser(props.user) }} />
                        <button onClick={() => { props.deleteUser(props.user) }}>
                            Delete User
                            </button>
                            <button onClick={()=> { props.editUser(props.user)}}>
                            Edit User
                            </button> */}
                    </UserWrapper>
                )
            })}

        </UserListWrapper>
    )
}


export default UserList;