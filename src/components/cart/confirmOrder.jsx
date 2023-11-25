import { Link,useNavigate } from 'react-router-dom'
import './confirmOrder.css'
import { useSelector } from 'react-redux'
import { MetaData } from '../layout/metaData'
export const ConfirmOrder=()=>
{
    const navigate=useNavigate()
    const {cart,shippingInfo}=useSelector((state)=>state.cart)
    const subtotal=cart.reduce((acc,item)=>acc+item.quantity*item.price,0) 
    const tax=subtotal*0.18;
    const shippingCharges=subtotal>1000?0:200;
    const totalPrice=subtotal+tax+shippingCharges;
    const data={
        subtotal,
        tax,
        shippingCharges,
        totalPrice
    }
    const orderSubmit=()=>{
        sessionStorage.setItem("orderInfo",JSON.stringify(data))
        navigate('/payment')
    }
    return(
        <>
        <MetaData title={`ConfirmOrder | | Codeswear`}/>
            <div className="confirmOrderPage">
                <div className="confirmUserDetails">
                    <p>Shipping Info</p>
                    <div>
                        <p>Name:</p>
                        <span>yuyuyu</span>
                    </div>
                    <div>
                        <p>Phone:</p>
                        <span>+91 {shippingInfo.phone}</span>
                    </div>
                    <div>
                        <p>Address:</p>
                        <span>{shippingInfo.address}</span>
                    </div>
                </div>
                <div className="confirmOrderItems">
                    <p>Your Items</p>
                    <div className="confirmItemBox">
                        {
                            cart && cart.map((item)=>(
                                <div>
                        <img src={item.image} alt="Product" />
                        <Link to={`/product/${item.product}`}>
                            {item.name} 
                        </Link>

                        </div>
                            ))
                        }

                        {/* <div>
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <Link>
                            Iphone XR 2022 
                        </Link>

                        </div>
                        <div>
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <Link>
                            Iphone XR 2022 
                        </Link>
                        </div> */}
                    </div>
                </div>
                <div className="confirmOrderSummary">
                    <p>Order Summary</p>
                    <div>
                        <p>SubTotal:</p>
                        <span>{subtotal}</span>
                    </div>
                    <div>
                        <p>Shipping Charges:</p>
                        <span>00</span>
                    </div>
                    <div>
                        <p>GST:</p>
                        <span>18%</span>
                    </div>
                    <div>
                        <p>Total:</p>
                        <span>$50,000</span>
                    </div>
                </div>
                <div>
                    <button onClick={orderSubmit}>Proceed To Payment</button>
                </div>
            </div>
        </>
    )
}