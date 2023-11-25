import { Rating } from '@mui/material'
import {useState,useEffect} from 'react'
import './details.css'
import Carousel from 'react-material-ui-carousel'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../actions/productAction'
import { Loader } from '../layout/loader/loader'
import { addToCart } from '../actions/cart'
import {enqueueSnackbar} from 'notistack'
import { MetaData } from '../layout/metaData'


export const Details = () => {
    const [quantity,setQuantity]=useState(1)
    const [open, setOpen] = useState(false);
    const {id}=useParams()
    const dispatch=useDispatch()
    const {loading,products}=useSelector((state)=>state.products)
    
    console.log(id);
    const increase=()=>
    {
        setQuantity(quantity+1);
    }
    const decrease=()=>
    {
        if(quantity===0)
        {
            return ;
        }
        setQuantity(quantity-1);
    }
    const cartHandler=()=>{
      
        dispatch(addToCart(id,quantity))
        enqueueSnackbar("Items Added To Cart",{variant:"success"})
        
       
    }
    useEffect(()=>{
        dispatch(getProductDetail(id));
    },[dispatch])
    return (
        <>
            {/* <div className="product-details">
                <div className="prod-img">
                    <Carousel  className='carousel'>
                    
                    {
                        products.images && products.images.map((item)=>(
                            <img src={item} alt="" />
                        ))
                    }
                    </Carousel>
                </div>
                <div className="prod-details">
                    <h2 className='prod-name'>{products.title}</h2>
                    <p className='prod-id'>Product # {products._id}</p>

                    <Rating readOnly={true} value={products.rating} size='10px' />
                    <h1 className='prod-price'>₹{products.price}</h1>
                    <p className='desc'>${products.description}</p>
                    <div className="qtn-btn">
                        <button className='increase' onClick={decrease}>-</button>
                        <input type="number" readOnly value={quantity}/>
                        <button className='decrease' onClick={increase}>+</button>
                    </div>
                </div>
            </div> */}
            {
                loading?<Loader/>:
                <>
                <MetaData title={`ProductDetail ${id} | | Codeswear`}/>
                    <div className="product-details">
                <div className="prod-img">
                    <Carousel  className='carousel'>
                    
                    {
                        products.images && products.images.map((item)=>(
                            <img src={item} alt="" />
                        ))
                    }
                    </Carousel>
                </div>
                <div className="prod-detail">
                    <h2 className='prod-name'>{products.title}</h2>
                    <p className='prod-id'>Product # {products._id}</p>

                    <Rating readOnly={true} value={products.rating} size='10px' />
                    <h1 className='prod-price'>₹{products.price}</h1>
                    <p className='desc'>${products.description}</p>
                    <div className="qtn-btn">
                        <button className='increase' onClick={decrease}>-</button>
                        <input type="number" readOnly value={quantity}/>
                        <button className='decrease' onClick={increase}>+</button>
                    </div>
                    <button className='cart-btn'  onClick={cartHandler}>Add To Cart</button>
                </div>
            </div>
                </>
            }
        </>
    )
}