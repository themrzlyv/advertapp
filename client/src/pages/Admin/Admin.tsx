import React, { useEffect, useState } from 'react'
import Adverts from './Adverts'
import General from './General'
import Users from './Users'

import {GiRapidshareArrow} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'
import {ImUsers} from 'react-icons/im'
import {IoChatboxEllipses} from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { getAllAdverts } from '../../Global/Actions/Advert/advertAction'

const Admin:React.FC = () => {

    const dispatch = useDispatch()

    const [isGeneral, setisGeneral] = useState(true)
    const [isUsers, setisUsers] = useState(false)
    const [isAdverts, setisAdverts] = useState(false)

    useEffect(() => {
        dispatch(getAllAdverts())
    },[])

    return (
        <div className="container bg-white shadow-2 rounded">
            <div className="row">
                <div className="col-lg-12 my-2">
                    <span className="badge py-2 px-3 bg-primary">
                        <GiRapidshareArrow fontSize={18} className="me-1"/>
                        Admin
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 my-2 ">
                    <ul className="list-group my-2 ">
                        <li
                        onClick={() => {
                            setisGeneral(true)
                            setisUsers(false)
                            setisAdverts(false)
                        }} 
                        className="list-group-item p-0 border-0">
                            <button className="btn admin-sidebar-item w-100 m-0 d-flex align-items-center">
                                <BiWorld fontSize={15} className="me-1"/>
                                General
                            </button>
                        </li>
                        <li 
                        onClick={() => {
                            setisGeneral(false)
                            setisUsers(true)
                            setisAdverts(false)
                        }}
                        className="list-group-item p-0 border-0">
                            <button className="btn admin-sidebar-item w-100 m-0 d-flex align-items-center">
                                <ImUsers fontSize={15} className="me-1"/>
                                Users
                            </button>
                        </li>
                        <li 
                        onClick={() => {
                            setisGeneral(false)
                            setisUsers(false)
                            setisAdverts(true)
                        }}
                        className="list-group-item p-0 border-0">
                            <button className="btn admin-sidebar-item w-100 m-0  d-flex align-items-center">
                                <IoChatboxEllipses fontSize={15} className="me-1"/>
                                Adverts
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8 my-2 ">
                    {isGeneral === true ? (<General />) : null}
                    {isUsers === true ? (<Users />) : null}
                    {isAdverts === true ? (<Adverts />) : null}
                </div>
            </div>
        </div>
    )
}

export default Admin
