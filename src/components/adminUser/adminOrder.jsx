import { DashboardSideBar } from "./dashboardSidebar"
import './adminOrder.css'
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllOrder, updateOrder } from "../actions/order"
import { Link } from "react-router-dom"
import { gettAllUsers } from "../actions/userAction"
import { Dialog, DialogContent } from "@mui/material"
import { enqueueSnackbar } from 'notistack'
import { MetaData } from "../layout/metaData"
export const AdminOrder = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const { error, loading, order } = useSelector((state) => state.order);
    const update = {
        status: ""
    }
    const handleStatusUpdate = (id) => {

        update.status = value;
        dispatch(updateOrder(id, update))
        setOpen(false)


    }
    const [open, setOpen] = useState(false)
    useEffect(() => {
        dispatch(getAllOrder());

        // dispatch(gettAllUsers())
    }, [dispatch, handleStatusUpdate])
    return (
        <>
<MetaData title={`AdminOrders | | Codeswear`}/>
            <div className="dashboard">
                <DashboardSideBar />
                <div className="orderWrapper">
                    <h2>ADMIN PANNEL</h2>
                    <p>Products</p>
                    <div className="orderConta">
                        <div className="orderField">
                            <div className="div">
                                <span>Order Id</span>
                            </div>
                            <div className="div">
                                <span>Order Price</span>
                            </div>
                            <div className="div">
                                <span>Order Status</span>
                            </div>
                            <div className="div">
                                <span>Order Quantity</span>
                            </div>
                            <div className="div">
                                <span>Order Payment</span>
                            </div>
                            <div className="div">
                                <span>Order Status</span>
                            </div>

                        </div>
                        {
                            order && order.map((item) => (
                                <div className="orderItems">
                                    <div className="div">
                                        <Link><span style={{ color: 'white', textDecoration: 'none', width: '100%', wordBreak: 'break-all' }}>#{item._id}</span></Link>
                                    </div>
                                    <div className="div">
                                        <span>{Math.round(item.totalPrice)}</span>
                                    </div>
                                    <div className="div">
                                        <span>{item.orderStatus}</span>
                                    </div>
                                    <div className="div">
                                        <span>{item.orderItems.length}</span>
                                    </div>
                                    <div className="div">
                                        <span>{item.paymentInfo.status}</span>
                                    </div>
                                    <div className="div">
                                        <button onClick={() => setOpen(true)}>Update</button>
                                        <Dialog open={open} onClose={() => setOpen(false)}>
                                            <DialogContent />
                                            <div style={{ width: '500px', height: '500px', textAlign: 'center' }}>
                                                <p style={{ color: 'black', fontSize: '22px' }}>Update Order Status</p>
                                                <div className="orderStatus">
                                                    <div>
                                                        <span>Order Price</span>
                                                        <p>{Math.round(item.totalPrice)}</p>
                                                    </div>
                                                    <div>
                                                        <span>Order Quantity</span>
                                                        <p>{item.orderItems.length}</p>
                                                    </div>
                                                    <div>
                                                        <span>Order Status</span>
                                                        <p>{item.orderStatus}</p>
                                                    </div>
                                                    <div>
                                                        {
                                                            item.orderStatus === "delivered" ? <><span>Already Delivered</span></>:
                                                            <>
                                                                <>
                                                                <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="OrderStatus" required />
                                                                <button onClick={() => handleStatusUpdate(item._id)}>Change</button>
                                                            </>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="orderItems">
                                    <div className="div">
                                        <Link><span style={{color:'white',textDecoration:'none',width:'100%',wordBreak:'break-all'}}>#item._id</span></Link>
                                    </div>
                                    <div className="div">
                                        <span>787979</span>
                                    </div>
                                    <div className="div">
                                        <span>5646464</span>
                                    </div>
                                    <div className="div">
                                        <span>item.orderItems.length</span>
                                    </div>
                                    <div className="div">
                                        <span>ryryr</span>
                                    </div>
                                    <div className="div">
                                        <button onClick={()=>setOpen(true)}>Update</button>
                                        <Dialog open={open} onClose={()=>setOpen(false)}>
                                            <DialogContent/>
                                            <div style={{width:'500px',height:'500px',textAlign:'center'}}>
                                                <p style={{color:'black',fontSize:'22px'}}>Update Order Status</p>
                                                <div className="orderStatus">
                                                     <div>
                                                        <span>Order Price</span>
                                                        <p>5000</p>
                                                     </div>
                                                     <div>
                                                        <span>Order Quantity</span>
                                                        <p>5</p>
                                                     </div>
                                                     <div>
                                                        <span>Order Status</span>
                                                        <p>Processing</p>
                                                     </div>
                                                     <div>
                                                        <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="OrderStatus" required />
                                                        <button onClick={handleStatusUpdate}>Change</button>
                                                     </div>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </div>
                                </div> */}





                    </div>
                </div>
            </div>
        </>
    )
}