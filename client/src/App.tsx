import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from './components/Footer/Footer'
import Navi from './components/Header/Navi'
import Navigator from './components/Header/Navigator'
import { getUser } from './Global/Actions/User/userAction'
import MainPages from './pages'

const App:React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    },[dispatch])
    
    return (
        <div className="container-fluid vh-100 d-flex flex-column justify-content-between">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <Navi />
                    <Navigator />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-3">
                    <MainPages />
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-12 p-0">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
