import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleAdvert } from '../../Global/Actions/Advert/advertAction'
import { RootState } from '../../Global/Store'
import { useRouter } from '../../helpers/hooks/useRouter'
import {IoMdArrowRoundForward} from 'react-icons/io'

const AdvertDetail = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {id} = router.query

    const advert = useSelector((state:RootState) => state.adverts.advert)

    useEffect(() => {
        dispatch(getSingleAdvert(id))
    },[dispatch, id])

    
    return (
        <div className="container  ">
            <div className="row">
                <div className="col-lg-10 mx-auto ">
                    <div className="card shadow-5">
                        <img className=" big-card-image " src={advert?.image} alt={advert?.title}/>
                        <div className="card-body row my-3">
                            <div className="col-lg-10 mx-auto">
                                <button
                                className="btn bg-orange text-white w-100 shadow-3 my-2"
                                >
                                    {advert?.price}
                                </button>
                                <h4
                                className="text-center my-2"
                                >{advert?.title}</h4>
                            </div>
                            <div className="col-lg-5">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex align-items-center justify-content-between">
                                        <h6 className=" fs-6 m-0 ">
                                            City:
                                        </h6>
                                        <h6 className="fs-6 m-0 fw-bold">
                                            {advert?.city}
                                        </h6>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between">
                                        <h6 className=" fs-6 m-0">
                                            Email:
                                        </h6>
                                        <h6 className="fw-bold fs-6 m-0">{advert?.email}</h6>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between">
                                        <h6 className=" fs-6 m-0 ">
                                            Facebook:
                                        </h6>
                                        <h6 className="fs-6 m-0 fw-bold">{advert?.facebook}</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="col lg-7">
                                <p className="text-justify">
                                    <IoMdArrowRoundForward fontSize={15} className="me-1"/>
                                    {advert?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertDetail
