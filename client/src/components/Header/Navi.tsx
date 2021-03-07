import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdFindReplace} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {BsBuilding} from 'react-icons/bs'
import {HiOutlineAnnotation} from 'react-icons/hi'




const Navi = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue shadow-3">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <HiOutlineAnnotation fontSize={18} className="me-2" />
                    Advert
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link d-flex align-items-center" to="/adverts">
                            <MdFindReplace fontSize={20} className="me-1" />
                            Explore
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link d-flex align-items-center" to="/company">
                            <BsBuilding fontSize={15} className="me-1" />
                            Company
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link d-flex align-items-center" to="/contact">
                            <FaPhoneAlt fontSize={15} className="me-1" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
                    <form>
                        <input className="form-control shadow-2" type="search" placeholder="Search"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navi


