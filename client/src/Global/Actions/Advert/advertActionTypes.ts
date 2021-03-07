export const GET_ALL_ADVERTS = "GET_ALL_ADVERTS"
export const GET_SINGLE_ADVERT = "GET_SINGLE_ADVERT"

export type AdvertDataType = {
    _id:string;
    title:string;
    image:string;
    tags: string [];
    author: string;
    city:string;
    description:string;
    price:string;
    email:string;
    facebook:string
}

export interface GetAllAdverts {
    type: typeof GET_ALL_ADVERTS,
    payload:{
        length: number,
        adverts: AdvertDataType []
    }
}

export interface GetSingleAdvert {
    type: typeof GET_SINGLE_ADVERT,
    payload: AdvertDataType
}



export type AdvertDispatchType = GetAllAdverts | GetSingleAdvert