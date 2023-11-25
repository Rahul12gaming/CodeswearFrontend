import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import {loadStripe} from '@stripe/stripe-js'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {enqueueSnackbar} from 'notistack'
import './payment.css'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createOrder } from "../actions/order";
import {useNavigate} from 'react-router-dom'
import { MetaData } from "../layout/metaData";
export const Payment=()=>{
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const {shippingInfo,cart}=useSelector((state)=>state.cart)
    const elements = useElements();
    const stripe = useStripe();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const order = {
        shippingInfo,
        orderItems: cart,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,
      };
      const handlePay=async()=>{
        try{
            const {data}=await axios.post('http://localhost:4000/stripe/process/payment',{
            amount:5000
        })
        const client_secret = data.client_secret;
        
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: "Rahul",
            email: "rahuladhikari9582@gmail.com",
            address: {
              line1: "gyryryr",
              city: shippingInfo.city,
              state: shippingInfo.stat,
              postal_code:shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        enqueueSnackbar("Error",{variant:"error"})
      } else {
        if(result.paymentIntent.status === "succeeded") {
          order.paymentInfo={
            id:result.paymentIntent.id,
            status:result.paymentIntent.status
          }
          dispatch(createOrder(order))
          navigate('/orderSuccess')
        } 
      }
        }
        catch(err)
        {
            console.log(err.message);
        }
      
    }
      
    return (
        <>
      

      <MetaData title={`Payment | | Codeswear`}/>
            <div className="paymentContainer">
                <p>Card Info</p>
                <div>
                    <CreditCardIcon/>
                    <CardNumberElement className="paymentInput"/>
                </div>
                <div>
                    <EventIcon/>
                    <CardExpiryElement className="paymentInput"/>
                </div>
                <div>
                    <VpnKeyIcon/>
                    <CardCvcElement className="paymentInput"/>
                </div>
                <input type="submit" value={'Pay'} onClick={handlePay} />
            </div>
       
        </>
    )
}