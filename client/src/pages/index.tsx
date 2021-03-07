import React from 'react'
import { Switch , Route} from 'react-router-dom'
import AdvertDetail from './AdvertDetail/AdvertDetail'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const MainPages = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/advert/:id" component={AdvertDetail} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default MainPages
