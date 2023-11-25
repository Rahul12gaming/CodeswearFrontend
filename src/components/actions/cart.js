import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../../constants/cartConstant";

export const addToCart=(id,quantity)=>async(dispatch,getState)=>{
   
        const {data}=await axios.get(`https://backend2-sbis.onrender.com/product/details/${id}`);
        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:data.product._id,
                price:data.product.price,
                name:data.product.title,
                image:data.product.images[0],
                stock:data.product.stock,
                quantity
            }

        })
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
   
}
export const removeFromCart=(id)=>async(dispatch,getState)=>{
    try
    {
        dispatch({type:REMOVE_FROM_CART,payload:id});
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart))
    }
    catch(err)
    {
        console.log(err);
    }
}
export const saveShippingInfo=(data)=>async(dispatch,getState)=>{
    try
    {
        console.log(data);
        dispatch({type:SAVE_SHIPPING_INFO,payload:data});
        localStorage.setItem("shippingInfo",JSON.stringify(data))
    }
    catch(err)
    {
        console.log(err);
    }
}