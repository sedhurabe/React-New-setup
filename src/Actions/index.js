import { GET_USER_ACTION } from 'Contants';
import axios from 'axios';
import { baseUrl } from 'Config';

export const userGetAction = (user) =>({
  type: GET_USER_ACTION,
  user
})

export const userFetchApi = () => dispatch =>
  axios.get(`${baseUrl}/users`)
  .then(res => res)
  .then(resData => dispatch(userGetAction(resData)))