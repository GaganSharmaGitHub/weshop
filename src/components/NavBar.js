import {FirebaseContext} from '../firebase'
import React,{useState} from 'react'
import { RiHome2Line,RiUserShared2Line,RiShoppingCartLine, RiTruckLine, } from "react-icons/ri";
import {Link} from 'react-router-dom'
import '../scss/navbar.scss'
export default function NavBar() {
    const [active, setactive] = useState('home')
    return(
        <FirebaseContext.Consumer>
        {firebase=>{
            
    return (
        <div className='navbar'>
            <nav>
            <Link to='/'
            onClick={()=>{setactive('home')}}
            className={active==='home'?'active':''}>
                <RiHome2Line></RiHome2Line>
            </Link>
            <Link title='Cart'
            onClick={()=>{setactive('cart')}}
            className={active==='cart'?'active':''} 
            to='/cart'>
                <RiShoppingCartLine></RiShoppingCartLine>
            </Link>
            <Link title='Orders'
            onClick={()=>{setactive('orders')}}
            className={active==='orders'?'active':''} to='orders'>
                <RiTruckLine></RiTruckLine>
            </Link>
            <a onClick={firebase.signUserOut}>
            <RiUserShared2Line></RiUserShared2Line>
            </a>
            
            </nav>
        </div>
    )
        }}
        </FirebaseContext.Consumer>
    )
}
