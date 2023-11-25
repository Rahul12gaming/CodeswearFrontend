import { DashboardSideBar } from "./dashboardSidebar"
import './adminProduct.css'
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAdminProducts } from "../actions/productAction"
import { MetaData } from "../layout/metaData"
export const AdminProducts=()=>{
    const dispatch=useDispatch()
    const {products}=useSelector((state)=>state.products)
        useEffect(()=>{
            dispatch(getAdminProducts())
        },[dispatch])
    return (

        <>
        <MetaData title={`AdminProducts | | Codeswear`}/>
            <div className="dashboard">
                <DashboardSideBar/>  
                <div className="prodWrapper">
                    <h2>ADMIN PANNEL</h2>
                    <p>Products</p>
                    <div className="prodConta">
                        <div className="prodField">
                            <div className="div">
                                <span>Prod. Id</span>
                            </div>
                            <div className="div">
                                <span>Prod. Name</span>
                            </div>
                            <div className="div">
                                <span>Prod. Img</span>
                            </div>
                            <div className="div">
                                <span>Prod. Price</span>
                            </div>
                        </div>
                        {
                            products && products.map((item)=>(
                                <div className="prodItems">
                            <div className="div">
                                <span   >#{item._id}</span>
                            </div>
                            <div className="div">
                                <span>{item.title}</span>
                            </div>
                            <div className="div">
                            <img src={item.images[0]} alt="Product" />
                            </div>
                            <div className="div">
                                <span>{item.price}</span>
                            </div>
                        </div>
                            ))
                        }

                        
                        

                        
                    </div>
                </div>
            </div>
        </>
    )
}