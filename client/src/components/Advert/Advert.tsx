import React from 'react'
import { AdvertDataType } from '../../Global/Actions/Advert/advertActionTypes'
import {BiStore} from 'react-icons/bi'
import {MdPersonPinCircle} from 'react-icons/md'
import {BsArrowReturnRight} from 'react-icons/bs'
import {MdFavoriteBorder} from 'react-icons/md'
import { useRouter } from '../../helpers/hooks/useRouter'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../Global/Actions/User/userAction'




interface Iprops {
    data: AdvertDataType
}

const Advert:React.FC<Iprops> = ({data}) => {
    const router = useRouter()
    const dispatch = useDispatch()
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
                    <button 
                    onClick={() => dispatch(addFavorite(data))}
                    className="card-favorite">
                        <MdFavoriteBorder fontSize={25} />
                    </button>
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
