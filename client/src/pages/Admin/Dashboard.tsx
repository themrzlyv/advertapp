import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Global/Store'
import Admin from './Admin'

const Dashboard = () => {
    const user = useSelector((state:RootState) => state.user.user)
    return (
        <>
            {
                user?.role === false || user?.role === undefined ? 
                (<h4>Admin access denied!</h4>)
                :
                (<Admin />)
            }
        </>
    )
}

export default Dashboard
