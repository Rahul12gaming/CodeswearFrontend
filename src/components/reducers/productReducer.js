import { ADMIN_ALL_PRODUCTS, ALL_PRODUCR_REQUEST, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../../constants/productConstant";

export const productReducer=(state={products:[]},action)=>{
    switch(action.type)
    {
        case ALL_PRODUCR_REQUEST:
            return{
                loading:true,products:[]
            }
        case PRODUCT_DETAIL_REQUEST:
            return{
                loading:true,products:[]
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                products:action.payload.product
            }
        case PRODUCT_DETAIL_SUCCESS:
            return{
                loading:false,
                products:action.payload.product,
                productCount:action.payload.productCount,
                resultPerPage:action.payload.resultPerPage,
                filteredProductCount:action.payload.filteredProductCount
            }
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case PRODUCT_DETAIL_FAIL:
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case ADMIN_ALL_PRODUCTS:
            return{
                loading:false,
                products:action.payload.product,
            }

        default:
            return state;
    }
}