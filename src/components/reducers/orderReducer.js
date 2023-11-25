import { ADMIN_ALL_ORDERS, ADMIN_DELETE_ORDER, ADMIN_UPDATE_ORDER, ALL_ORDER_ERROR, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../../constants/orderConstant";


export const OrderReducer=(state={},action)=>{
    switch(action.type)
    {
        case CREATE_ORDER_REQUEST:
        case MY_ORDER_REQUEST:
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading:true
            }
           
        case CREATE_ORDER_SUCCESS:
        case MY_ORDER_SUCCESS:
        case ORDER_DETAILS_SUCCESS:
        case ADMIN_ALL_ORDERS:
        case ADMIN_UPDATE_ORDER:
        case ADMIN_DELETE_ORDER:
            return{
                loading:false,
                order:action.payload
                
            }
        case ALL_ORDER_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}