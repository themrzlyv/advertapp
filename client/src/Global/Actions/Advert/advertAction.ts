import {Dispatch} from 'redux'
import { getData } from '../../../helpers/Api/fetchData'
import { AdvertDispatchType, GET_ALL_ADVERTS, GET_SINGLE_ADVERT } from './advertActionTypes'

export const getAllAdverts = () => async (dispatch:Dispatch<AdvertDispatchType>) => {
    const data = await getData(`/api/adverts`)
    dispatch({type:GET_ALL_ADVERTS,payload: data})
}

export const getSingleAdvert = (id:string | undefined) => async (dispatch:Dispatch<AdvertDispatchType>) => {
    const data = await getData(`/api/adverts/${id}`)
    dispatch({type:GET_SINGLE_ADVERT,payload: data})
}