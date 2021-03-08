import React from 'react'
import {RiLoginBoxLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import LoginForm from './LoginForm'


const Login = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-8 mx-auto shadow-1 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="my-3 fs-5 d-flex align-items-center">
                                    <RiLoginBoxLine fontSize={25} className="me-2"/>
                                    Login
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 my-2">
                                <LoginForm />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 my-2">
                                <h6 className="my-1 fs-6 d-flex align-items-center">
                                    You don't have any account?
                                    <NavLink className="text-danger" to="/register">Register</NavLink>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
