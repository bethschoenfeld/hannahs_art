import axios from 'axios'

export function sendUsersToState(usersFromDatabase) {
  return { type: 'GET_USERS', usersFromDatabase }
}

export function getUserRoute() {
  return function (dispatch) {
    return axios.get('/api/users')
      .then((response) => {
        dispatch(sendUsersToState(response.data))
      })
  }
}