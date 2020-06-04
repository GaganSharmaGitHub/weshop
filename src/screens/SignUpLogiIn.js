import React from 'react'
import SignUpForm from '../components/SignUpForm'
import Landing from './Landing'
import LoginForm from '../components/LoginForm'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
export default function SignUpLogin() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path='/login' component={LoginForm}></Route>

        <Route component={SignUpForm} path='/signup'></Route>
        <Route path='/' component={Landing}></Route>
        </Switch>
        </BrowserRouter>
            )
     
}
