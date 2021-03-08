import {Dispatch} from 'redux'
import { getData } from '../../../helpers/Api/fetchData'
import { GET_USER_INFO, UserDispatchType, USER_FAIL, USER_LOGOUT } from './userActionTypes'


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

export const logoutUser = () => async (dispatch:Dispatch<UserDispatchType>) => {
    const result = await getData(`/api/user/logout`)
    dispatch({type: USER_LOGOUT,payload:result})
}


