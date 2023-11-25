import axios from "axios";
import { ADMIN_ALL_USERS, LOAD_REQUEST, LOAD_REQUEST_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../../constants/userConstant"

export const LoginUser=(email,password)=>async(dispatch)=>{
    try
    {
        dispatch({type:LOGIN_REQUEST});
        const {data}=await axios.post('https://backend2-sbis.onrender.com/auth/login',{email,password},{withCredentials:true} )
        
        dispatch({type:LOGIN_SUCCESS,payload:data})
    }
    catch(err)
    {
        dispatch({type:LOGIN_FAIL,payload:err.message});
    }
};
export const SignupUser=(name,email,password,gender)=>async(dispatch)=>{
    try
    {
        dispatch({type:SIGN_UP_REQUEST});
        const {data}=await axios.post('https://backend2-sbis.onrender.com/auth/Singup',{name,email,password,gender},{withCredentials:true} )
        
        dispatch({type:SIGN_UP_SUCCESS,payload:data})
    }
    catch(err)
    {
        dispatch({type:SIGN_UP_FAIL,payload:err.message});
    }
};
export const loadUser=()=>async(dispatch)=>{
    try{

        dispatch({type:LOAD_REQUEST});
        const {data}=await axios.get('https://backend2-sbis.onrender.com/auth/me',{withCredentials:true});
        dispatch({type:LOAD_REQUEST_SUCCESS,payload:data})
    }
    catch(err)
    {
        console.log(err.message);
    }
}
export const gettAllUsers=()=>async(dispatch)=>{
    try{

        
        const {data}=await axios.get('https://backend2-sbis.onrender.com/auth/admin/users',{withCredentials:true});
        dispatch({type:ADMIN_ALL_USERS,payload:data})
    }
    catch(err)
    {
        console.log(err.message);
    }
}

