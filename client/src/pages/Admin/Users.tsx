import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Global/Actions/Admin/adminActions'
import { UserDataType } from '../../Global/Actions/Admin/adminActionTypes'
import { RootState } from '../../Global/Store'
import Modal from './Modal'

const Users = () => {

    const [show, setshow] = useState(false)
    const [currentUser, setcurrentUser] = useState<UserDataType>()

    const dispatch = useDispatch()
    const users = useSelector((state:RootState) => state.admin.users)

    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {show ? <div style={{marginTop: show ? '0' : '-50vh'}} className="modal-backdrop"></div> : null}
                    <Modal show={show} handleClose={setshow} user={currentUser}/>
                    {
                        users === undefined || users.length === 0 ? 
                        (
                            <h4>Loading...</h4>
                        )
                        :
                        (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(item => (
                                            <tr onClick={() => {
                                                setshow(!show)
                                                setcurrentUser(item)
                                            }} key={item._id}>
                                                <td>{item.email}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    {
                                                        item.role === true ? "admin" : "user"
                                                    }
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

export default Users
