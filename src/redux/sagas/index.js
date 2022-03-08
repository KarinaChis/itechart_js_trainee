import { takeLeading, put, all } from "@redux-saga/core/effects";
import Cookies from "js-cookie";
import { login, signup } from "../../http/userApi";
import { LOGIN, SIGNUP, MAKE_INVISIBLE } from "../constants";


export function* workerLoginSaga({ payload }){
    try {
        const response = yield login(payload.email, payload.password)
        if(response) {
            Cookies.set("jwtAccessToken", response.accessToken)
            Cookies.set("jwtRefreshToken", response.refreshToken)
            yield put({type: MAKE_INVISIBLE})
        }
    } catch (e){ alert(e.response.message) }
}

export function* workerSignupSaga({ payload }){
    try {
        const response = yield signup(payload.email, payload.password, payload.firstName, payload.lastName)
        if(response) { yield put({type: MAKE_INVISIBLE})}
    } catch (e){ alert(e.response.message) }
}

export function* watchLoginSaga(){ yield takeLeading(LOGIN, workerLoginSaga) };
export function* watchSignupSaga(){ yield takeLeading(SIGNUP, workerSignupSaga) };

export default function* rootSaga(){
    yield all([watchLoginSaga(),watchSignupSaga()]);
}