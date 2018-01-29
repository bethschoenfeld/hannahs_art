function userReducer(state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
      return [...action.usersFromDatabase]
    case 'CREATE_USER':
    return [...state, action.newUserData]  
    default:
      return state
  }
}

export default userReducer
