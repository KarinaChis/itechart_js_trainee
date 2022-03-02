import { authHost, host } from "./index";
import jwt_decode from "jwt-decode";


export const signup = async (email, password, firstName, lastName) => {
    const { data } = await host
        .post('/api/v1/users/signup', { email, password, firstName, lastName })
        .catch((err) => {
            throw new Error(err)
        })
    // localStorage.setItem('token', data.token)
    if(data.accessToken) {
        jwt_decode(data.accessToken);
        // localStorage.setItem('token', data.accessToken)
    }
    return data
}

export const login = async (email, password) => {
    const { data } = await host
        .post('/api/v1/users/login', { email, password })
        .catch((err) => {
            throw new Error(err)
        })
    if(data.accessToken) {
        jwt_decode(data.accessToken);
        // localStorage.setItem('token', data.accessToken)
    }
    return data
}

export const check = async () => {
    const { data } = await host.post('/api/v1/users/login')
    // localStorage.setItem('token', data.token)
    if(data.accessToken) {
        jwt_decode(data.accessToken);
        // localStorage.setItem('token', data.accessToken)
    }
    return data
}