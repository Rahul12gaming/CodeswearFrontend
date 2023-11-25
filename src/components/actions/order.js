import { ADMIN_ALL_ORDERS, ADMIN_DELETE_ORDER, ADMIN_UPDATE_ORDER, ALL_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../../constants/orderConstant"
import axios from 'axios'
export const createOrder=(order)=>async(dispatch)=>{
    try
    {
        dispatch({type:CREATE_ORDER_REQUEST})
        const {data}=await axios.post("https://backend2-sbis.onrender.com/order/create",order,{withCredentials:true});
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})
    }
}
export const myOrder=()=>async(dispatch)=>
{
    try
    {
        dispatch({type:MY_ORDER_REQUEST});
        const {data}=await axios.get("https://backend2-sbis.onrender.com/order/myOrders",{withCredentials:true});
        dispatch({type:MY_ORDER_SUCCESS,payload:data});
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})
    }
}
export const orderDetails=(id)=>async(dispatch)=>
{
    try
    {
        dispatch({type:ORDER_DETAILS_REQUEST});
        const {data}=await axios.get(`https://backend2-sbis.onrender.com/order/orderDetails/${id}`,{withCredentials:true});
        dispatch({type:ORDER_DETAILS_SUCCESS,payload:data.order});
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})
    }
}
// Admin

export const getAllOrder=()=>async(dispatch)=>{
    try
    {
        const {data}=await axios.get('https://backend2-sbis.onrender.com/order/allOrders');
        dispatch({type:ADMIN_ALL_ORDERS,payload:data.order})
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})
    }
}

export const updateOrder=(id,status)=>async(dispatch)=>{
    try
    {
        const {data}=await axios.post(`https://backend2-sbis.onrender.com/order/updateOrder/${id}`,status);
        dispatch({type:ADMIN_UPDATE_ORDER,payload:data.order})
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})    }
}

export const deleteOrder=(id)=>async(dispatch)=>{
    try
    {
        const {data}=await axios.delete(`https://backend2-sbis.onrender.com/order/updateOrder/${id}`);
        dispatch({type:ADMIN_DELETE_ORDER,payload:data.order})
    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_ERROR,payload:err.message})
    }
}