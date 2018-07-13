import Home from './pages/home'
import List from './pages/list'
import Mine from './pages/mine'
import Login from './pages/login'
import Cities from './components/commons/Cities'
import React from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'

const RouterView = props => {
        return (
                <div>
                    <Switch>
                        <Route exact path='/' component = {Home}/>
                        <Route path = '/list' component = {List}/>
                        <Route path = '/mine' component = {Mine}/>
                        <Route path = '/login' component = {Login}/>
                        <Route path = '/cities' component = {Cities}/>
                        <Redirect from = '**' to='/'/>
                    </Switch>  
                </div>
        )
}

export default RouterView;