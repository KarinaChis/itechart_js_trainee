import { LOGIN, LOGOUT, SIGNUP, MAKE_VISIBLE, MAKE_INVISIBLE } from "../constants";

export const loginAction = () => ({
    type: LOGIN,
})

export const signupAction = () => ({
    type: SIGNUP,
})

export const logOutAction = () => ({
    type: LOGOUT,
})

export const modalVisible = () => ({
    type: MAKE_VISIBLE
})

export const modalInVisible = () => ({
    type: MAKE_INVISIBLE
})