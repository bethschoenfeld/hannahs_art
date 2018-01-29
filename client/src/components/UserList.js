import React, { Component } from 'react'
    import styled from 'styled-components'
    import { connect } from 'react-redux'
    import { push } from 'react-router-redux'
    import { getUserRoute, deleteUserFromDatabase } from '../actions/thunk.js'
    import EditUserForm from './EditUserForm'

const UserListWrapper = styled.div`
    display: flex;
.userWrapper{
    /* border: 1px solid black; */
    font-family: 'Raleway', serif;
    font-size:28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
}
.username{ 
    font-size:28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
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
.contact{
    font-family: 'Raleway', serif;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.contactInfo{ 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
}
.email{
font-family: 'Playfair Display', serif;
}
.instagram{
font-family: 'Playfair Display', serif;
}
.website{
font-family: 'Playfair Display', serif;
}
.artwork{
    font-family: 'Raleway', serif;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.editUser{
    height: 20px;
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
                        <div className="userWrapper" key={i}>
                            <div className="username">
                                {user.username}
                            </div>
                            <EditUserForm user={user} />
                            <button onClick={() => this.props.deleteUserFromDatabase(user)}>
                                Delete
                            </button>
                            <div className="">
                                {user.contact.map((contact, i) => {
                                    return (
                                        <div key={i} className="contactInfo">
                                            <div className="contact">
                                                Contact
                                            </div>
                                            <div className="email">
                                                {contact.email}
                                            </div>
                                            <div className="instagram">
                                                {contact.instagram}
                                            </div>
                                            <div className="website">
                                                {contact.website}
                                            </div>
                                            <div>
                                                {contact.artwork.map((artwork, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <div className="artwork">
                                                                Artwork
                                                            </div>
                                                            <div className="picture">
                                                                <img height="300px" src={artwork.artwork} alt="artwork" />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
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