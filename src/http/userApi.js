import { authHost, host } from "./index";
import jwt_decode from "jwt-decode";


export const signup = async (email, password, firstName, lastName) => {
    const { data } = await host
        .post('/api/v1/users/signup', { email, password, firstName, lastName })
        .then(console.log(`Succesfully signup ${firstName} ${lastName}`))
        .catch((err) => { throw new Error(err) })
    return data
}

export const login = async (email, password) => {
    const { data } = await host
        .post('/api/v1/users/login', { email, password })
        .catch((err) => { throw new Error(err) })
        if(data.accessToken) { jwt_decode(data.accessToken);}
        if(data.refreshToken) { jwt_decode(data.refreshToken);}
        console.log("Succesfully login")
    return data
}

export const check = async () => {
    const { data } = await host
    .post('/api/v1/users/login')
    if(data.accessToken) { jwt_decode(data.accessToken);}
    if(data.refreshToken) { jwt_decode(data.refreshToken);}
    return data
}

export const getPosts = async () => {
    const { data } = await host
        .get('/api/v1/posts/getAllPosts', )
        .catch((err) => { throw new Error(err) })

    return data
}