import Loader from '../components/Loader'
import React,{useState,useEffect} from 'react'
import SearchBar from '../components/searchBar'
import rapidApikey from '../api/rapidapi'
import Results from '../components/Results'
export default function Home() {
    const [results, setResults] = useState(false)
    const fetchProducts= ()=>{
        fetch('https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=27871&limit=48&store=US&rapidapi-key='+rapidApikey)
        .then(res=>res.json()).then(res=>setResults(res.products)).catch(e=>{alert(e.message)})
    }
    const search=(quer)=>{
        if(!quer){
            fetchProducts()
            return
        }
        setResults(false)
        quer.replace(' ','%20')
        fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&q=${quer}&sort=freshness&lang=en-US&sizeSchema=US&offset=0&limit=48&store=US&rapidapi-key=`+rapidApikey)
        .then(res=>res.json()).then(res=>setResults(res.products)).catch(e=>{alert(e.message)})
    
    }
    useEffect(() => {
        console.log(fetchProducts())
        return () => {
            
        }
    }, [])
    if(!results){
        return(
            <div>
            <SearchBar search={search} setProduct={setResults}></SearchBar>
            <Loader></Loader>
            </div>) 
    }
    return (
        <div>
        <SearchBar search={search} setProduct={setResults}></SearchBar>
            <Results results={results}></Results>
        </div>
    )
}
