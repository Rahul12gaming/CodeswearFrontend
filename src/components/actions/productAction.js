import axios from "axios";
import { ADMIN_ALL_PRODUCTS, ALL_PRODUCR_REQUEST, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../../constants/productConstant"

export const gettAllProduct=(keyword="",currentPage=1,price=[0,25000],category)=>async(dispatch)=>{
    try
    {   
        dispatch({type:ALL_PRODUCR_REQUEST});
       
        
        let link=`https://backend2-sbis.onrender.com/product/product?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        if(category)
        {
             link=`https://backend2-sbis.onrender.com/product/product?keyword=${keyword}&category=${category}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        }
        const {data}=await axios.get(link);

        dispatch({type:ALL_PRODUCT_SUCCESS,payload:data})

    }
    catch(err)
    {
        dispatch({type:ALL_PRODUCT_FAIL,payload:err.message})
    }
}
export const getProductDetail=(id)=>async(dispatch)=>{
    try
    {   
        dispatch({type:PRODUCT_DETAIL_REQUEST});
        const {data}=await axios.get(`https://backend2-sbis.onrender.com/product/details/${id}`);
        dispatch({type:PRODUCT_DETAIL_SUCCESS,payload:data})

    }
    catch(err)
    {
        dispatch({type:PRODUCT_DETAIL_FAIL,payload:err.message})
    }
}


export const getAdminProducts=(id)=>async(dispatch)=>{
    try
    {   
        
        const {data}=await axios.get(`https://backend2-sbis.onrender.com/product/admin/products`);
        dispatch({type:ADMIN_ALL_PRODUCTS,payload:data})

    }
    catch(err)
    {
        dispatch({type:PRODUCT_DETAIL_FAIL,payload:err.message})
    }
}
