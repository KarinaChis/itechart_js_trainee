import { LOGIN, SIGNUP, LOGOUT, MAKE_VISIBLE, MAKE_INVISIBLE } from "../constants";

const initial = {
    isLogin: false,
    isSignUp: false,
    isVisible: false
}

const auth = ( state = initial, { type } ) => {
    switch(type){
        case LOGIN: {
            return {
                ...state,
                isLogin: true
            }
        }
        case SIGNUP: {
            return {
                ...state,
                isSignUp: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isLogin: false,
                isSignUp: false
            }
        }
        case MAKE_VISIBLE: {
            return {
                ...state,
                isVisible: true
            }
        }
        case MAKE_INVISIBLE: {
            return {
                ...state,
                isVisible: false
            }
        }
        default:
            return state;
    } 
    
}

export default auth;