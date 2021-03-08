import React from 'react'
import { Switch , Route} from 'react-router-dom'
import Account from './Account/Account'
import AdvertDetail from './AdvertDetail/AdvertDetail'
import Home from './Home/Home'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Register from './Register/Register'

const MainPages = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/advert/:id" component={AdvertDetail} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default MainPages
