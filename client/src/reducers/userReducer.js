function userReducer(state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
      return [...action.usersFromDatabase]
    case 'CREATE_USER':
    return [...state, action.newUserData] 
    case 'DELETE_USER': 
    return state.filter(user => user._id !== action.userToDeleteId)
    default:
      return state
  }
}

export default userReducer
