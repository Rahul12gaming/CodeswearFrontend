import HomeIcon from '@mui/icons-material/Home'
import PinDropIcon from '@mui/icons-material/PinDrop'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PublicIcon from '@mui/icons-material/Public'
import PhoneIcon from '@mui/icons-material/Phone'
import TransferWithAStationIcon from '@mui/icons-material/TransferWithinAStation'
import { Country ,State} from 'country-state-city'
import './shipping.css'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { CheckoutSteps } from './checkoutStep'
import { saveShippingInfo } from '../actions/cart'
import {enqueueSnackbar} from 'notistack'
import { useNavigate } from 'react-router-dom'
import { MetaData } from '../layout/metaData'
export const Shipping=()=>
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [country,setCountry]=useState();
    const [state,setState]=useState();
    const [address,setAddress]=useState();
    const [city,setCity]=useState();
    const [pincode,setPincode]=useState();
    const [phone,setPhone]=useState();


const shippingSubmit=(e)=>
{
    e.preventDefault();
    if(phone.length<10||phone.length>10||phone.length==0)
    {
        enqueueSnackbar("Incorrect Phone Number",{variant:"error"});
    }
     if(!phone||!city||!state||!country||!address||!pincode)
    {
        enqueueSnackbar("Please Fill The Shipping Info.",{variant:"error"});
    }
    dispatch(saveShippingInfo({country,state,phone,city,pincode,address}));
    navigate('/confirmOrder')
}
    return(
        <>
        <MetaData title={`ShippingInfo | | Codeswear`}/>
        <CheckoutSteps/>
            <div className="shipping-container">
                <div className="shipping-box">
                    <h2 className='shippingHeading'>Shipping Details</h2>
                    <form className='shippingForm' >
                        <div>
                            <HomeIcon/>
                            <input value={address} type="text" placeholder='Address' onChange={(e)=>setAddress(e.target.value)} />
                        </div>
                        <div>
                            <LocationCityIcon/>
                            <input value={city} type="text" placeholder='City' onChange={(e)=>setCity(e.target.value)} />
                        </div>
                        <div>
                            <PinDropIcon/>
                            <input value={pincode} type="text" placeholder='PinCode' onChange={(e)=>setPincode(e.target.value)} />
                        </div>
                        <div>
                            <PhoneIcon/>
                            <input value={phone} type="number" placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div>
                        {/* Rahul@123#564789 */}
                            <PublicIcon/>
                            <select value={country} onChange={(e)=>setCountry(e.target.value)}>
                                <option value="">Country</option>
                                {
                                    Country && Country.getAllCountries().map((item)=>(
                                        <option value={item.isoCode}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                       <div>
                        <TransferWithAStationIcon/>
                        <select value={state} name="" id="" onChange={(e)=>setState(e.target.value)}>
                                <option value="">State</option>
                                {
                                    State && State.getStatesOfCountry(country).map((item)=>(
                                        <option value={item.isoCode}>{item.name}</option>
                                    ))
                                }
                            </select>
                       </div>
                       <input onClick={shippingSubmit} type="submit" value="Continue" className='shippingBtn' />
                    </form>
                </div>

            </div>
        </>
    )
}