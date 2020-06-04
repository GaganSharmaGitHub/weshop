import weshop from '../weshop.svg'
import { RiUserReceivedLine } from "react-icons/ri"
import React,{useState} from 'react'
import {FirebaseContext} from '../firebase'
import {Link} from 'react-router-dom'
export default function LoginForm() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
   return( <FirebaseContext.Consumer>
    {firebase=>{
        const handleSubmit = (e)=>{
            e.preventDefault()
            console.log(email,password)
            }
        return(
        <div className='formContainer'>    
            <form onSubmit={handleSubmit}>
            <img alt='weshops' src={weshop}></img>
                <div className='inputContainer'>
                <label>email</label>
                <input email='text' onChange={
                    (e)=>{
                        setemail(e.target.value)
                    }
                }
                value={email}></input>
                </div>
                <div className='inputContainer'>
                <label>password</label>
                <input value={password} email='text' onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }></input>
                </div>
                <button onClick={()=>{
                    try{
                        firebase.signUser(email,password)
                    }
                    catch(e){alert(e.message)
                    }
                }}>
                <RiUserReceivedLine></RiUserReceivedLine>
                Login

                </button>
                <Link to='/signup'>Don't have an account? SignUp</Link>
            </form>
        </div>
        )
    }}
    </FirebaseContext.Consumer>)
}
