import React, { Component } from 'react'

class UserForm extends Component {
    
    state = {
        newUser: {
            username: 'Orange'
        }
    }

    handleNewUserChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = { ...this.state.newUser }
        newUser[attributeName] = attributeValue

        this.setState({ newUser })
    };

    addNewUser = (event, props) => {
        event.preventDefault()
        this.props.createUser(this.state.newUser)
        this.setState({
            newUser: {}
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addNewUser}>
                    <div>
                        <input name="username" type="text" onChange={this.handleNewUserChange} />
                    </div>
                    <div>
                        <input type="submit" value="Create New User" />
                    </div>
                </form>
            </div>
        )
    }
}
export default UserForm