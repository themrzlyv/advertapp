import React from 'react'
import { NavLink } from 'react-router-dom'
import { AdvertDataType } from '../../Global/Actions/Advert/advertActionTypes'
import {BiStore} from 'react-icons/bi'
import {MdPersonPinCircle} from 'react-icons/md'
import {BsArrowReturnRight} from 'react-icons/bs'
import { useRouter } from '../../helpers/hooks/useRouter'




interface Iprops {
    data: AdvertDataType
}

const Advert:React.FC<Iprops> = ({data}) => {
    const router = useRouter()
    return (
        <div 
        onClick={() => router.push(`/advert/${data._id}`)}
        className="col-lg-3 my-2">
            <div className="card shadow-2 rounded-3 position-relative">
                <img className="card-img-top card-image " src={data.image} alt={data.title}/>
                <div className="card-body">
                    <span className="badge bg-orange card-badge shadow-7">
                        {
                            data.author === "Store" ? (<BiStore fontSize={15} className="mx-1"/>) : (<MdPersonPinCircle fontSize={15} className="mx-1"/>)
                        }
                        {data.author}
                    </span>
                    <h5 className="fw-bold fs-6 border-bottom">Price: {data.price}</h5>
                    <h6 className="fw-normal fs-6">
                        <BsArrowReturnRight fontSize={15} className="mr-1"/>
                        {data.title}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Advert
