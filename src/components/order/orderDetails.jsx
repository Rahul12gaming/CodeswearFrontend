import { Link, useParams } from "react-router-dom"
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { orderDetails } from "../actions/order";
import { Loader } from "../layout/loader/loader";
import { MetaData } from "../layout/metaData";
export const OrderDetails=()=>
{
    const params=useParams();
    const dispatch=useDispatch();
    const {order,loading}=useSelector((state)=>state.order)
    const {id}=params;
    console.log(id);
    useEffect(()=>{
        dispatch(orderDetails(id))
    },[id,dispatch])
    return (
        <>
            {
                loading?<Loader/>:
                <>
                <MetaData title={`OrderDetails | | Codeswear`}/>
                    <div className="detailsContainer">
                       
                        <div className="orderDetails">
                        <span>Order #{order._id}</span>
                        <p>Shipping Info</p>
                        <div className="shippingInfo">
                            <div>
                                <span>Name:</span>
                                <p>{order.user.name}</p>
                            </div>
                            <div>
                                <span>Phone:</span>
                                <p>+91 {order.shippingInfo.phone}</p>
                            </div>
                            <div>
                                <span>Phone:</span>
                                <p>+91 {order.shippingInfo.address}</p>
                            </div>
                        </div>
                        <p>Payment Info</p>
                        <div className="paymentInfo">
                            <p>
                                {order.paymentInfo && order.paymentInfo.status=="succeeded"?"PAID":"NOT PAID"}
                            </p>
                        </div>
                        <p>Order Status</p>
                        <div className="paymentInfo">
                            <p>
                                {order.orderStatus && order.orderStatus}
                            </p>
                        </div>
                        <p>Order Items</p>
                        <div className="orderItems">
                            {
                                order.orderItems && order.orderItems.map((items)=>(
                                    <div className="items">
                                        <img src={items.image} alt="" />
                                        <Link to={`/product/${items.product}`}>
                                        {items.name}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}