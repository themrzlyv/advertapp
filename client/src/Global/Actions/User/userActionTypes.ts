import { AdvertDataType } from "../Advert/advertActionTypes"

export const GET_USER_INFO = "GET_USER_INFO"
export const USER_FAIL = 'USER_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_UPDATE = 'USER_UPDATE'
export const ADD_FAVORITE = "ADD_FAVORITE"

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

export interface UpdateUserInfo {
    type: typeof USER_UPDATE;
    payload: UserDataType 
}

export interface UserLogout {
    type: typeof USER_LOGOUT;
    payload: UserError;
}

export interface AddFavorite {
    type: typeof ADD_FAVORITE;
    payload: UserDataType
}

export type UserDispatchType = GetUserInfo | UserFail | UserLogout | UpdateUserInfo | AddFavorite