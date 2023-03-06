/* eslint-disable import/no-anonymous-default-export */
import {reguser} from "../services/regAPI";

 export async function loginUser(dispatch, loginPayload) {
    try {
      dispatch({ type: 'REQUEST_LOGIN' });
      let data = reguser(loginPayload);
   
      if (data.user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        localStorage.setItem('currentUser', JSON.stringify(data));
        return data
      }
   
      dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
      return;
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error: error });
    }
  }
   
  export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }


  export default {loginUser , logout}