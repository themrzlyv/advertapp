import { AdvertDataType, AdvertDispatchType, GET_ALL_ADVERTS, GET_SINGLE_ADVERT } from "../Actions/Advert/advertActionTypes"

interface Istate {
    adverts?: {
        length: number,
        adverts: AdvertDataType []
    },
    advert?: AdvertDataType
}

const initialState:Istate = {

}

export const advertReducer = (state:Istate = initialState, action: AdvertDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_ADVERTS:
            return {
                adverts:action.payload
            }
        case GET_SINGLE_ADVERT:
            return {
                ...state,
                advert: action.payload
            }
        default:
            return state
    }
}