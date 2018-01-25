import React from 'react'
import styled from 'styled-components'

const UserWrapper = styled.div`
      border: 1px solid cyan;
`

const User = (props) => {
      return (
            <UserWrapper>
                  User Component
            <div>
                        <input type="text"
                              name="username"
                              value={props.user.username}
                              onChange={(event) => props.handleChange(props.user, event)}
                              onBlur={() => { props.updateUser(props.user) }} />

                        <button onClick={() => { props.deleteUser(props.user) }}>
                              Delete User
                        </button>
                  </div>
            </UserWrapper>
      )
}
export default User