import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'



const Footer = () => {
    return (
        <div className="container-fluid bg-dark-blue">
            <div className="row d-flex align-items-center flex-wrap">
                <div className="col-lg-3">
                    <p className="text-warning text-justify w-100 my-2 fs-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi  
                    </p>
                </div>
                <div className="col-lg-6">
                    <h6 className=" text-white text-center">
                        &#169; Advert.com – All Rights Reserved
                    </h6>
                </div>
                <div className="col-lg-3 ">
                    <div className="d-flex justify-content-evenly w-50 my-2 mx-auto">
                        <a href="/">
                            <FaFacebookF fontSize={20} color="white"/>
                        </a>
                        <a href="/">
                            <FaTwitter fontSize={20} color="white"/>
                        </a>
                        <a href="/">
                            <FiGithub fontSize={20} color="white"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
