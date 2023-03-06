import axios from "axios";
import api from "./api"

export async function register() {

    const response = await axios.get(`${api.baseURL}`);
    return await response.json();
}

export async function reguser(data) {
    const response = await axios.post(`${api.baseURL}/register`, data, api.header)
    return await response.json();
}

export async function deleteTask(taskId) {
    const response = await axios.delete(`${api.baseURL}`)
    return await response.json();
}
export async function editTask(data) {
    const response = await axios.put(`${api.baseURL}`,data)
    return await response.json();
}

export default reguser;