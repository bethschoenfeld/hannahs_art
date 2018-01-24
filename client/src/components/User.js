import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
    state = {
        users: []
    }
    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }
    render() {
        return (
            <div>
                <div>
                {this.state.users.map((user, i) => {
                        console.log(user)
                        return (
                            <div key={i}>
                                <p>{`${user.username}`}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default User
