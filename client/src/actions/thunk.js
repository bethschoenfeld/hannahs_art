import axios from 'axios'

export function sendUsersToState(usersFromDatabase) {
  return { type: 'GET_USERS', usersFromDatabase }
}

export function getUserRoute() {
  return function (dispatch) {
    return axios
    .get('/api/users')
      .then((response) => {
        dispatch(sendUsersToState(response.data))
      })
  }
}

export function sendNewUserToState(newUserData) {
return{type: 'CREATE_USER', newUserData}
}

export function sendNewUserToDatabase(newUserInfo) {
  return function (dispatch) {
    return axios.post('/api/users', newUserInfo)
    .then((response) =>{
      dispatch(sendNewUserToState(response.data))
    })
  }
}