import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../../constants/cartConstant";

export const cartReducer=(state={cart:[],shippingInfo:{}},action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            const item=action.payload;
            const isExist=state.cart.find((i)=>i.product===item.product);
            if(isExist)
            {
                return {
                    ...state,
                    cart:state.cart.map((i)=>
                    i.product===isExist.product?item:i)
                };
            }
            else
            {
                return{
                    ...state,
                    cart:[...state.cart,item],
                }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((i)=>i.product!==action.payload)
            }
        case SAVE_SHIPPING_INFO:
            return{
                ...state,
                shippingInfo:action.payload
            }
        default:
            return state
    }
}