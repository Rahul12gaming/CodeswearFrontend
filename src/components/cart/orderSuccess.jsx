import CheckCirleIcon from '@mui/icons-material/CheckCircle'
import './orderSuccess.css'
import { MetaData } from '../layout/metaData'
export const OrderSuccess=()=>{
    return(
        <>
        <MetaData title={`Order Placed Successfully | | Codeswear`}/>
            <div className="orderSuccess">
                <CheckCirleIcon/>
                <p>Your Order Has Been Placed Successfully</p>

            </div>
        </>
    )
}