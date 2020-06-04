import React from 'react'
import '../scss/appPage.scss'
import NavBar from '../components/NavBar'
import Home from './Home'
import Cart from './Cart'
import Orders from './Orders'
import weshop from '../weshop.svg'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
export default function AfterLogin() {
    return (
        <div >
        <BrowserRouter>
        <NavBar></NavBar>
        <header>
        <img src={weshop} alt='weshop'></img>
        <h1>eshop</h1>
        </header>
        <div className='appPage'>
        <Switch>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/orders' component={Orders}></Route>
        <Route path='/' component={Home}></Route>
        <Route path='/' component={Home}></Route>
        </Switch>
        </div>
        </BrowserRouter>
        </div>
    )
}
