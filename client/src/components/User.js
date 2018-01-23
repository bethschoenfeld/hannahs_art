import React, {Component} from 'react'
import axios from 'axios'


class User extends Component {
    state = {
        users: {}
    }
    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({users: response.data})
    }
    render() {
        return (
            <div>
                It's a user! 
            </div>
        )
    }
}
export default User
