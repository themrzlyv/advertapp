import { AdvertDataType } from "../Advert/advertActionTypes"

export const GET_ALL_USERS = "GET_ALL_USERS"
export const CHANGE_USER_ROLE = "CHANGE_USER_ROLE"
export const DELETE_USER = "DELETE_USER"


export type UserDataType = {
    _id:string;
    name:string;
    email:string;
    avatar:string;
    role:boolean;
    favorites: object [];
    about:string;
}

export interface GetAllUsers {
    type: typeof GET_ALL_USERS;
    payload: UserDataType []
}
export interface ChangeUserRole {
    type: typeof CHANGE_USER_ROLE;
    payload: UserDataType []
}
export interface DeleteUser {
    type: typeof DELETE_USER;
    payload: UserDataType []
}


// admin adverts checking and updating

export const ADMIN_GET_ALL_ADVERTS = "ADMIN_GET_ALL_ADVERTS"
export const CHECKED_ADVERT = "CHECKED_ADVERT"
export const DELETE_ADVERT = "DELETE_ADVERT"


export interface AdminGetAllAdverts {
    type: typeof ADMIN_GET_ALL_ADVERTS,
    payload:{
        length: number,
        adverts: AdvertDataType []
    }
}

export interface CheckedAdvert {
    type: typeof CHECKED_ADVERT;
    payload:{
        length: number,
        adverts: AdvertDataType []
    }
}

export interface DeleteAdvert {
    type: typeof DELETE_ADVERT;
    payload:{
        length: number,
        adverts: AdvertDataType []
    }
}


export type AdminDispatchType = GetAllUsers | ChangeUserRole | DeleteUser | AdminGetAllAdverts | CheckedAdvert | DeleteAdvert