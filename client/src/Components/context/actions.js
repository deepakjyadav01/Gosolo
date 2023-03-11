/* eslint-disable import/no-anonymous-default-export */
import { reguser, checkemail } from "../services/regAPI";
import axios from "axios";
import {header, baseURL} from "../services/api"

export async function checkEmail(email) {
    try {
        let data = checkemail(email);
        return data
    } catch (error) {
        return error
    }
}
export async function RegisterUser(Reg) {
    try {
        let data = {
            email: Reg.email,
            role: Reg.role,
            password: Reg.password,
            cnfpass: Reg.cnfpass
        }
        let result = await reguser(data)
        return result;
    } catch (error) {
       console.log(error.message)
    }
}
export async function loginUser(dispatch, loginPayload) {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        const res = await axios.post(`${baseURL}/login`, loginPayload, header)

        if (res.data) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            return res.data
        }

        dispatch({ type: 'LOGIN_ERROR', error: res.data.errors[0] });
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


export default { loginUser, logout }