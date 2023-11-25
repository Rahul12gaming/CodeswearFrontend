import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { addToCart, removeFromCart } from '../actions/cart'
import { useNavigate } from 'react-router-dom'
import {enqueueSnackbar} from 'notistack'
import { MetaData } from '../layout/metaData'
export const Cart = () => {
    const { cart } = useSelector((state) => state.cart)
    const { inAuthenticated } = useSelector((state) => state.user)
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const increaseQuantity=(id,quantity,stock)=>{
        const newQtn=quantity+1;
        dispatch(addToCart(id,newQtn))
    }
    const decreaseQuantity=(id,quantity)=>{
        const newQtn=quantity-1;
        dispatch(addToCart(id,newQtn))
    }
    const remove=(id)=>{
        dispatch(removeFromCart(id))
    }
    const handleCheckout=()=>
    {
        if(!inAuthenticated)
        {
            return enqueueSnackbar("Login To Proceed",{variant:"error"})
        }
        if(cart.length===0)
        {
            return  enqueueSnackbar("Add Item To Continue",{variant:"error"})
        }
        navigate('/shipping')
    }
    return (
        <>
        <MetaData title={`Cart | | Codeswear`}/>
            <div className="cart">

                {
                    cart && cart.map((item) => (
                        <>

                            <div className="cart-container">
                                <div className="cart-items">
                                    <div className="cart-product">
                                        <img src={item.image} alt="Product" />
                                    </div>
                                    <div className="cart-details">
                                        <span className='cart-title'>{item.name.length>10? `${item.name.substring(0,15)}...`:item.name}</span>
                                        <p className='cart-id'>Product ID # {item.product}</p>
                                        <span className='cart-qtn'>Quantity : {item.quantity}</span>

                                    </div>

                                </div>
                                <div className="cart-button">
                                    <div className="cart-btns">
                                        <button className='cart-increase' onClick={()=>decreaseQuantity(item.product,item.quantity)}>-</button>
                                        <input type="number" readOnly value={item.quantity} />
                                        <button className='cart-decrease' onClick={()=>increaseQuantity(item.product,item.quantity,item.stock)}>+</button>
                                    </div>
                                    <button onClick={()=>remove(item.product)}>Remove</button>
                                    <p className='cart-price'>$ {item.price}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
                

            </div>
            {
                cart&&
                    <div className="cart-summary">
                <span>Gross Total</span>
                <p>Quantity: {`${cart.reduce(
                    (acc,item)=>acc+item.quantity,0
                )}`}</p>
                <p>{`${cart.reduce(
                    (acc,item)=>acc+item.quantity*item.price,0
                )}`}</p>
                <button onClick={handleCheckout}>Checkout</button>

            </div>
                
            }
        </>
    )
}