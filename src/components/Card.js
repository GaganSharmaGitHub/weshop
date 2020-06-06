import React from 'react'
import {RiShoppingCartLine,} from "react-icons/ri";
import {Link} from 'react-router-dom'
export default function Card(p) {
    return (
        <div className='card'>
        <Link to={'/product/'+p.data.id}>
         <img src={'http://'+p.data.imageUrl} alt={p.data.name}></img>
         <p>
        <h4>{p.data.name}</h4>
        <h6>{p.data.price.current.text}</h6>
        </p>
            <button>
                <RiShoppingCartLine></RiShoppingCartLine>{'  Add to Cart'}
            </button>
        </Link>
        </div>
    )
}
