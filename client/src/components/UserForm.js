import React, { Component } from 'react'

class UserForm extends Component {
    
    state = {
        newUser: {}
    }

    handleNewUserChange = (user, event) => {
        const attributeName = event.target.attributeName
        const attributeValue = event.target.attributeValue

        const newUser = { ...this.state.newUser }
        newUser[attributeName] = attributeValue

        this.setState({ newUser })
    };

    addNewUser = (event) => {
        event.preventDefault()

        this.props.addNewUserToProductList(this.state.newUser)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addNewUser}>
                    <div>
                        <input name="userName" type="text" placeholder="Name" onChange={this.handleNewUserChange} />
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