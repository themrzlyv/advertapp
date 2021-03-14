import { AdminDispatchType, ADMIN_GET_ALL_ADVERTS, CHANGE_USER_ROLE, CHECKED_ADVERT, DELETE_ADVERT, DELETE_USER, GET_ALL_USERS, UserDataType } from "../Actions/Admin/adminActionTypes";
import { AdvertDataType } from "../Actions/Advert/advertActionTypes";

interface Istate {
    users?: UserDataType [];
    adverts?: {
        length: number,
        adverts: AdvertDataType []
    }
}

const initialState:Istate = {

}

export const adminReducer = (state:Istate = initialState,action:AdminDispatchType):Istate => {
    switch (action.type) {
        case ADMIN_GET_ALL_ADVERTS:
            return {
                ...state,
                adverts:action.payload
            }
        case CHECKED_ADVERT:
            return {
                ...state,
                adverts:action.payload
            }
        case DELETE_ADVERT:
            return {
                ...state,
                adverts:action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users:action.payload
            }
        case CHANGE_USER_ROLE:
            return {
                ...state,
                users:action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users:action.payload
            }
    
        default:
            return state;
    }
}