import { ADMIN_ALL_ORDERS } from "../../constants/orderConstant";
import { ADMIN_ALL_USERS, LOAD_REQUEST, LOAD_REQUEST_FAIL, LOAD_REQUEST_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../../constants/userConstant";

export const userReducer=(state={user:{}},action)=>
{
    switch (action.type)
    {
        case LOGIN_REQUEST:
        case LOAD_REQUEST:
        case SIGN_UP_REQUEST:
            return {
                loading:true,
                inAuthenticated:false
            }
            case LOGIN_SUCCESS:
            case LOAD_REQUEST_SUCCESS:
            case SIGN_UP_SUCCESS:
            
                return {
                    loading:false,
                    inAuthenticated:true,
                    user:action.payload
                }
            case LOGIN_FAIL:
            case LOAD_REQUEST_FAIL:
            case SIGN_UP_FAIL:
                return{
                    loading:false,
                    inAuthenticated:false,
                    error:action.payload,
                }
            
            default:
                return state;
    }
}
export const adminUserReducer=(state={Aminuser:{}},action)=>
{
    switch (action.type)
    {
        case ADMIN_ALL_USERS:
            return{
                loading:false,
                allUser:action.payload.user
            }
            
            default:
                return state;
    }
}
