import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrder } from '../actions/order'
import './myOrder.css'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../layout/loader/loader'
import { MetaData } from '../layout/metaData'

export const MyOrders = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { order,loading } = useSelector((state) => state.order);
    const orderDetails=(id)=>{
        navigate(`/orderDetails/${id}`)
    }
    useEffect(() => {
        dispatch(myOrder())
    }, [dispatch])
    return (
        <>
            {
                loading?<Loader/>:
                <>
                <MetaData title={`MyOrders | | Codeswear`}/>
                    <div className="myOrders">
                <div className="orderField">
                    <div className="orderId">
                        <span>Order Id</span>
                    </div>
                    <div className="orderPrice">
                        <span>Order Price</span>
                    </div>
                    <div className="orderOtn">
                        <span>Quantity</span>
                    </div>
                    <div className="orderAction">
                        <span>Processing</span>
                    </div>
                    <div className="viewOrderBtn">
                        <span>View Order</span>
                    </div>
                </div>

                <div className="div">
                    
                    {
                        order && order.order.map((item)=>(
                            <div className="orderTable">
                    <div className="orderId">
                        <span className='order1'>{item._id}</span>
                        
                    </div>
                    <div className="orderPrice">
                        <span className='order2'>{item.totalPrice}</span>
                        
                    </div>
                    <div className="orderOtn">
                        <span className='order3'>{item.orderItems.length}</span>
                       
                    </div>
                    <div className="orderAction">
                        <span className='order4'>{item.orderStatus}</span>
                        
                    </div>
                    <div className="viewOrderBtn">
                        <button className='viewOrder' onClick={()=>orderDetails(item._id)} >View Order</button>
                    </div>
                    </div>
                        ))
                    }
                </div>



            </div>
                </>
            }
        </>
    )
}