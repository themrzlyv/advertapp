import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Advert from '../../components/Advert/Advert'
import { getAllAdverts } from '../../Global/Actions/Advert/advertAction'
import { RootState } from '../../Global/Store'

const Home = () => {
    const adverts = useSelector((state:RootState) => state.adverts.adverts?.adverts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllAdverts())
    },[dispatch])

    return (
        <div className="container">
            <div className="row ">
                {
                    adverts === undefined || adverts.length === 0 ? (<h4>Loading...</h4>) :
                    adverts.map(item => <Advert key={item._id} data={item} />)
                }
            </div>
        </div>
    )
}

export default Home
