import { GET_USER_INFO, UserDataType, UserDispatchType, UserError, USER_FAIL, USER_LOGOUT } from "../Actions/User/userActionTypes";

interface Istate {
    user?:UserDataType;
    error?: UserError
}

const initialState:Istate = {

}

export const userReducer = (state:Istate = initialState, action:UserDispatchType):Istate => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                user: action.payload
            }
        case USER_FAIL:
            return {
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                error: action.payload
            }
    
        default:
            return state
    }
}