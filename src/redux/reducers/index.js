const initial = {
    isLogin: false,
    isSignUp: false
}


export default function reducer(state = initial, action) {
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
                isLogin: true
            }
        }
        case 'SIGNUP': {
            return {
                ...state,
                isSignUp: true
            }
        }
        default:
            return state;
    }
    
    
    
}

