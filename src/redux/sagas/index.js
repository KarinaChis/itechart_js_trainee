import { takeEvery, put, call } from "@redux-saga/core/effects";
import { host } from "../../http";
import {  signup } from "../../http/userApi";
import jwt_decode from "jwt-decode";


export function* workerSaga({email, password}){

    const login = async () => {
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

    const log = yield call(login); 
    yield call(signup); 

    yield put({type: 'LOGIN', payload: log})
    yield put({type: 'SIGNUP',})
}

export function* watchSaga(){
    yield takeEvery('CLICK', workerSaga)
};

export default function* rootSaga(){
    yield watchSaga();
}