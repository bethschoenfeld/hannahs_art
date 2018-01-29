import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getUserRoute, deleteUserFromDatabase } from '../actions/thunk.js'


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

class UserList extends Component {

  componentWillMount() {
    this.props.getUserRoute()
  }

  render() {
    return (
      < UserListWrapper >
        {this.props.users.map((user, i) => {
          return (
            <UserWrapper key={i}>
              <div>
                {user.username}
              </div>
              <button onClick={() => this.props.deleteUserFromDatabase(user)}>
                Delete
              </button>
            </UserWrapper>
          )
        })
        }
      </UserListWrapper >
    )
  }
}
const mapStateToProps = (state) => {
  return { users: state.users }
}
export default connect(mapStateToProps, { push, getUserRoute, deleteUserFromDatabase })(UserList)