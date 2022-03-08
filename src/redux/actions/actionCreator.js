import { LOGIN, LOGOUT, SIGNUP, MAKE_VISIBLE, MAKE_INVISIBLE } from "../constants";

export const loginAction = (payload) => ({
    type: LOGIN,
    payload,
});

export const signupAction = (payload) => ({
    type: SIGNUP,
    payload,
});

export const logOutAction = () => ({
    type: LOGOUT,
});

export const modalVisible = () => ({
    type: MAKE_VISIBLE
});

export const modalInVisible = () => ({
    type: MAKE_INVISIBLE
});