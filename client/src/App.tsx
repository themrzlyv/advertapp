import React from 'react'
import Footer from './components/Footer/Footer'
import Navi from './components/Header/Navi'
import Navigator from './components/Header/Navigator'
import MainPages from './pages'

const App:React.FC = () => {
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
