import { AdvertDataType } from "../Advert/advertActionTypes"

export const GET_USER_INFO = "GET_USER_INFO"
export const USER_FAIL = 'USER_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'


export type UserDataType = {
    _id:string;
    name:string;
    email:string;
    avatar:string;
    role:boolean;
    favorites:AdvertDataType [];
    about:string;
}

export type UserError = {
    error: string
}


export interface UserFail {
    type: typeof USER_FAIL;
    payload: UserError;
}

export interface GetUserInfo {
    type: typeof GET_USER_INFO;
    payload: UserDataType 
}

export interface UserLogout {
    type: typeof USER_LOGOUT;
    payload: UserError;
}


export type UserDispatchType = GetUserInfo | UserFail | UserLogout