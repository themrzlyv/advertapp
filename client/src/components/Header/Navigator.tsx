import React from 'react'
import {IoReturnUpBack} from 'react-icons/io5'
import {TiLocationArrow} from 'react-icons/ti'
import { useRouter } from '../../helpers/hooks/useRouter'



const Navigator = () => {

    const router = useRouter()
    const handleClick = () => {
        router.history.goBack()
    }
    
    return (
        <>
            {
                router.pathname === "/" ? null :
                (
                    <div className="container my-2 p-0">
                        <div className="col-lg-12  d-flex align-items-center">
                            <button
                            className="btn shadow-m-8 d-flex align-items-center shadow-1 btn-warning me-1"
                            onClick={handleClick}>
                                <IoReturnUpBack fontSize={20}/>
                                Back
                            </button>
                            <button
                            className="btn ms-1 bg-light"
                            disabled>
                                <TiLocationArrow fontSize={20} />
                                {
                                    router.pathname.replace(/^[A-Za-z]+$/, '*')
                                }
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navigator