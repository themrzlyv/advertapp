import { Dispatch } from 'redux';
import { deleteData, getData } from '../../../helpers/Api/fetchData';
import { AdminDispatchType, ADMIN_GET_ALL_ADVERTS, CHANGE_USER_ROLE, CHECKED_ADVERT, DELETE_ADVERT, DELETE_USER, GET_ALL_USERS } from './adminActionTypes';


export const adminGetAllAdverts = () => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const result = await getData(`/api/admin/adverts`,token)
    dispatch({type: ADMIN_GET_ALL_ADVERTS, payload: result})
}

export const checkedAdvert = (id:string | undefined) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const changed = await getData(`/api/admin/advert/checked/${id}`, token)
    const result = await getData(`/api/admin/adverts`, token)
    dispatch({type: CHECKED_ADVERT,payload:result})
}

export const deleteAdvert = (id:string | undefined) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const deleted = await deleteData(`/api/admin/advert/delete/${id}`)
    const result = await getData(`/api/admin/adverts`, token)
    dispatch({type: DELETE_ADVERT,payload:result})
}


export const getAllUsers = () => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const result = await getData(`/api/admin/users`,token)
    dispatch({type: GET_ALL_USERS, payload: result})
}


export const changeUserRole = (id:string | undefined) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const changed = await getData(`/api/admin/changeRole/${id}`, token)
    const result = await getData(`/api/admin/users`, token)
    dispatch({type: CHANGE_USER_ROLE,payload:result})
}

export const deleteUser = (id:string | undefined) => async(dispatch:Dispatch<AdminDispatchType>) => {
    const token = await getData(`/api/user/refresh_token`)
    const deleted = await deleteData(`/api/admin/delete/${id}`)
    const result = await getData(`/api/admin/users`, token)
    dispatch({type: DELETE_USER,payload:result})
}