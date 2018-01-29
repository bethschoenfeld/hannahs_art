import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUserInDatabase } from '../actions/thunk.js'
import styled from 'styled-components'

const EditFormWrapper = styled.div`
border: orange;
`

class EditUserForm extends Component {
  state = {
    userBeingEdited: {
      id: this.props.user._id,
      username: this.props.user.username
    }
  }
  handleChange = (event) => {
    const updatedUser = {
      ...this.state.userBeingEdited
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue
    this.setState({ userBeingEdited: updatedUser })
  }
  handleEditUser = () => {
    this.props.editUserInDatabase(this.state.userBeingEdited)
  }

  render() {
    return (
      <EditFormWrapper>
        <div>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.username} />
          <button onClick={this.handleEditUser}>
            Edit
          </button>
        </div>
      </EditFormWrapper>
    )
  }
}

export default connect(null, { editUserInDatabase })(EditUserForm)
