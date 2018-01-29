import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNewUserToDatabase } from '../actions/thunk.js'
import styled from 'styled-components'

const UserFormWrapper = styled.div`
    button{
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        font-size: 20px;
        border-radius: 4px;
    }

    button:hover {
        background-color: #e7e7e7;
        color: black;
        }
    .newUser{ 
        height: 20px;
    }
`

class UserForm extends Component {
    state = {
        newUserForm: {
        }
    }

    handleNewUserChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUserForm = { ...this.state.newUserForm }
        newUserForm[attributeName] = attributeValue

        this.setState({ newUserForm })
    };

    handleAddNewUser = () => {
        this.props.sendNewUserToDatabase(this.state.newUserForm)
        this.setState({
            newUserForm: {
                username: ""
            }
        })
    };

    render() {
        return (
            <UserFormWrapper>
                <input
                    className="newUser"
                    type="text"
                    name="username"
                    onChange={this.handleNewUserChange}
                    value={this.state.newUserForm.username} />
                <button onClick={this.handleAddNewUser}>Add User</button>
            </UserFormWrapper>
        )
    }
}

export default connect(null, { sendNewUserToDatabase })(UserForm)