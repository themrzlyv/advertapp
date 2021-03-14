import React from 'react'
import { UserDataType } from '../../Global/Actions/Admin/adminActionTypes'

import {FaTrash} from 'react-icons/fa'
import {BsArrowRepeat} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { changeUserRole, deleteUser } from '../../Global/Actions/Admin/adminActions'


interface Iprops {
    show: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
    user: UserDataType | undefined
}

const Modal:React.FC<Iprops> = ({show , handleClose , user}) => {

    const dispatch = useDispatch()

    return (
        <div style={{
            marginTop: show ? '0' : '-50vh',
            opacity: show ? '1' : '0'
        }} 
        className="container admin-modal shadow-5">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-end">
                    <button
                    className="btn d-flex align-items-center"
                    onClick={() => handleClose(!show)}
                    >
                        <GrFormClose fontSize={20} />
                        close
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="modal-img-container">
                        <img className="modal-img shadow-6" src={user?.avatar} alt=""/>
                    </div>
                    <div className="modal-body w-100 p-0">
                        <ul className="list-group w-100">
                            <li className="py-2 px-3">Name: {user?.name}</li>
                            <li className="py-2 px-3">id: {user?._id}</li>
                            <li className="py-2 px-3">Email: {user?.email}</li>
                            <li className="py-2 px-3">About: {user?.about}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-12 d-flex align-items-center">
                    <button
                    disabled={user?.role}
                    onClick={() => {
                        dispatch(deleteUser(user?._id))
                    }}
                    className="btn btn-danger me-2 shadow-7 d-flex align-items-center"
                    >
                        <FaTrash fontSize={15} className="me-1"/>
                        Delete
                    </button>
                    <button
                    onClick={() => dispatch(changeUserRole(user?._id))}
                    className="btn btn-warning shadow-7 text-white"
                    >
                        <BsArrowRepeat fontSize={18} className="me-1"/>
                        Change role
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
