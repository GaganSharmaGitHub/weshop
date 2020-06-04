import { RiUserAddLine,RiUserReceivedLine } from "react-icons/ri"
import weshop from '../weshop.svg'
import React from 'react'
import{Link} from 'react-router-dom'
import '../scss/landing.scss'
export default function Landing() {
    return (
        <div className='landing'>
            <div className='landingInner'>
            <img alt='weshops' src={weshop}></img>
            <h1>Welcome to Weshop</h1>
            <br></br>
            <p>
            Weshop, buy fashion from your favourite brands at best price
            </p>
            <br></br>
            <Link to='/login'>
                <button>
                <RiUserReceivedLine></RiUserReceivedLine>
                    Login
                </button>        
            </Link>
            <br></br>or <br></br>
            <Link to='/signup'>
                <button>
                <RiUserAddLine></RiUserAddLine>
                    Signup
                </button>
            </Link>
            </div>
        </div>
    )
}
