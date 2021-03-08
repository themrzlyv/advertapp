import React from 'react'
import RegisterForm from './RegisterForm'
import {SiTheregister} from 'react-icons/si'
import { NavLink } from 'react-router-dom'


const Register = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-8 mx-auto shadow-1 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="my-3 fs-5">
                                    <SiTheregister fontSize={25} className="me-2"/>
                                    Register
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 my-2">
                                <RegisterForm />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 my-2">
                                <h6 className="my-1 fs-6 d-flex align-items-center">
                                    You already have account?
                                    <NavLink className="text-danger" to="/login">Login</NavLink>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
