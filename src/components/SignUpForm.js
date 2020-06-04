import { RiUserAddLine} from "react-icons/ri"
import weshop from '../weshop.svg'
import React,{useState} from 'react'
import {FirebaseContext} from '../firebase'
import {Link} from 'react-router-dom'
export default function SignUpForm() {
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
              <br></br>
              <br></br>
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
                <br/>
                <br></br>
                <button onClick={()=>{
                    try{
                        firebase.createUser(email,password)
                    }
                    catch(e){alert(e.message)
                    }
                }}>
                
                <RiUserAddLine></RiUserAddLine>
                    Signup
                </button>
                <Link to='/login'>Already have an account? Login</Link>
                </form>
        </div>
        )
    }}
    </FirebaseContext.Consumer>)
}
