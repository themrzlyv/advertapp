import {Dispatch} from 'redux'
import { getData, putData } from '../../../helpers/Api/fetchData'
import { IuserUpdate } from '../../../pages/Account/Account'
import { AdvertDataType } from '../Advert/advertActionTypes'
import { ADD_FAVORITE, GET_USER_INFO, UserDispatchType, USER_FAIL, USER_LOGOUT, USER_UPDATE } from './userActionTypes'


export const getUser = () => async (dispatch:Dispatch<UserDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    if(token.error){
        return dispatch({type: USER_FAIL,payload: token.error})
    }
    const data = await getData(`/api/user/profile` , token)
    if(data.error){
        return dispatch({type: USER_FAIL,payload: data.error})
    }else {
        dispatch({type: GET_USER_INFO,payload: data })
    }
}

export const updateUser = (data:IuserUpdate) => async (dispatch:Dispatch<UserDispatchType>) => {
    const result = await putData(`/api/user/profile/favorite`, data)
    dispatch({type: ADD_FAVORITE,payload:result})
}

export const addFavorite = (data:AdvertDataType) => async (dispatch:Dispatch<UserDispatchType>) => {
    const result = await putData(`/api/user/profile`, data)
    dispatch({type: USER_UPDATE,payload:result})
}


export const logoutUser = () => async (dispatch:Dispatch<UserDispatchType>) => {
    const result = await getData(`/api/user/logout`)
    dispatch({type: USER_LOGOUT,payload:result})
}


