import {RiShoppingCartLine, } from "react-icons/ri";
import '../scss/productPage.scss'
import React,{useState,useEffect} from 'react'
import rapidApikey from '../api/rapidapi'
import Loader from '../components/Loader'
import Slider from "react-slick"
//import {Carousel} from 'react-responsive-carousel'
export default function Product(p) {
    console.log(p.match.params.id)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    const [product, setProduct] = useState(false)
        useEffect(() => {
            fetch('https://asos2.p.rapidapi.com/products/detail?sizeSchema=US&store=US&lang=en-US&currency=USD&id='+p.match.params.id+'&rapidapi-key='+rapidApikey)
            .then(res=>res.json()).then(setProduct)
            return () => {
                
            }
        }, [])
    if(!product){
        return <Loader/>
    }
    console.log(product)
    return (
    <div className='productPage'>
    <div className='productinfo'>
    <div className='caruosel'>
    <Slider {...settings}>
     {product.media.images.map((item)=>{
      return(
          <img key={item.colour} src={'https://'+item.url} alt={item.colour}></img>
         )
     })}
    </Slider>
   </div>
   <div className='text'>
   <h2>{product.name}</h2>
   by {product.brand.name}<br></br>
   <div className='for'>{product.gender}</div>
   <p className='price'>
   <span className='current'>{product.price.current.text} </span><br/>
   <span className='previous'>{(product.price.current.text===product.price.previous.text)?'':product.price.previous.text}</span>
   </p><br/>
   <button>
   <RiShoppingCartLine></RiShoppingCartLine>
   Add to Cart
   </button>
   </div>
    </div>
    <div>
    <br></br>
    <br></br>
    <h4>Description</h4>
    {product.description.replace( /(<([^>]+)>)/ig, ' ')}
    <h5>Size and Fit:</h5>
    {product.info.sizeAndFit?product.info.sizeAndFit.replace( /(<([^>]+)>)/ig, ' '):'no data'}
    </div>
    <br></br>
    <div className='otherInfo'>
    <h4>More info</h4>
    <h5>Care info:</h5>
    {product.info.careInfo?product.info.careInfo.replace( /(<([^>]+)>)/ig, ' '):'no data'}
    </div>
    </div>
    )
}
