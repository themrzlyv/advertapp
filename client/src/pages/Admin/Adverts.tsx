import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetAllAdverts, checkedAdvert, deleteAdvert } from '../../Global/Actions/Admin/adminActions'
import { RootState } from '../../Global/Store'

import {FaTrash} from 'react-icons/fa'
import {CgRadioChecked} from 'react-icons/cg'
import {CgRadioCheck} from 'react-icons/cg'

const Adverts = () => {

    const dispatch = useDispatch()
    const advertlist = useSelector((state:RootState) => state.admin.adverts)
    const adverts = useSelector((state:RootState) => state.admin.adverts?.adverts)

    useEffect(() => {
        dispatch(adminGetAllAdverts())
    },[dispatch])


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {
                        advertlist === undefined || advertlist.length === 0 ? 
                        (
                            <h4>Loading...</h4>
                        )
                        :
                        (
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Config</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        adverts?.map(item => (
                                            <tr key={item._id}>
                                                <td>{item.title}</td>
                                                <td>{item.city}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    {
                                                        item.checked === true ? 
                                                        <CgRadioChecked onClick={() => dispatch(checkedAdvert(item._id))}  fontSize={18}/> :
                                                        <CgRadioCheck onClick={() => dispatch(checkedAdvert(item._id))} fontSize={18}/>
                                                    }
                                                </td>
                                                <td>
                                                    <button 
                                                    onClick={() => dispatch(deleteAdvert(item._id))}
                                                    className="btn  ">
                                                        <FaTrash fontSize={18}/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Adverts
