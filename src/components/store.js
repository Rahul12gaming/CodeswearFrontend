import {applyMiddleware, combineReducers, createStore} from 'redux'
import { adminUserReducer, userReducer } from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { OrderReducer } from './reducers/orderReducer';
const reducer=combineReducers({
    user:userReducer,
    adminUser:adminUserReducer,
    products:productReducer,
    cart:cartReducer,
    order:OrderReducer
})
const initialState={
    cart:{
        cart:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
        shippingInfo:localStorage.getItem("shippingInfo")?JSON.parse(localStorage.getItem("shippingInfo")):[]
    },
   
}
const middleware=[thunk];
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))