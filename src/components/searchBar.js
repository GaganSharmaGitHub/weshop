import React,{useState} from 'react'
import {RiSearch2Line} from "react-icons/ri";
export default function SearchBar(p) {
    const [state, setstate] = useState('')
    return (
        <div className='searchBar'>
            <input value={state} onChange={(e)=>{setstate(e.target.value)}}></input>
            <button onClick={()=>p.search(state)}><RiSearch2Line>
            </RiSearch2Line>
            </button>
        </div>
    )
}
