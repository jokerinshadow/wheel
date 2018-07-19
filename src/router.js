import Home from './pages/home'
import List from './pages/list'
import Mine from './pages/mine'
import Login from './pages/login'
import Cities from './components/commons/Cities'
import React from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Test from './components/commons/childRouterTest';
import Change from './components/commons/changeComponent';
import Back from './pages/back';

const RouterView = props => {
        return (
                <div>
                    <Switch>
                        <Route exact path='/' component = {Home}/>
                        <Route path = '/list' component = {List}/>
                        <Route path = '/mine' component = {Mine}/>
                        <Route path = '/login' component = {Login}/>
                        <Route path = '/detail/:id' component = {Detail}/>
                        <Route path = '/cart/:id' component = {Cart}/>
                        <Route path = '/test' component = { Test }/>
                        <Route path = '/changecomponent' component = { Change }/>
                        <Route path = '/back' component = { Back } />
                        <Redirect from = '**' to='/'/>  
                        <Route path = '/cities' component = {Cities}/>
                        <Redirect from = '**' to='/'/>
                    </Switch>  
                </div>
            )
}

//注意在React中是Router 要和vue作出区别;
export default RouterView;