import React from 'react'
import styled from 'styled-components'


const UserListWrapper = styled.div`
border: solid green 1px;
`
const UserWrapper = styled.div`
border: 1px solid cyan;

button{
    background-color: #e7e7e7;
    color: black;
    border: 2px solid #e7e7e7;
}
`

const UserList = (props) => {
    return (
        < UserListWrapper >
        {props.users.map((user, i) => {
            return (
                    <UserWrapper>
                        <p  value={user._id}>
                            {user.username}
                        </p>
                        <input key={i} type="text"
                            name="username"
                            value={user.username}
                            onChange={(event) => props.handleChange(props.user, event)}
                            onBlur={() => { props.updateUser(props.user) }} />
                        <button onClick={() => { props.deleteUser(props.user) }}>
                            Delete User
                            </button>
                    </UserWrapper>
                )
            })
        }

        </UserListWrapper >
    )
}



export default UserList;