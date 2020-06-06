import React from 'react'
import Card from './Card'
export default function Results(p) {
    if(!p.results.length){
        return <h1 className='noResults'>(╯°□°)╯︵ ┻━┻
               <br></br> No results found
                </h1>
    }
    return (
        <div className='results'>
            {p.results.map((item)=>{
                return <Card key={item.id} data={item}></Card>
            })}
        </div>
    )
}
