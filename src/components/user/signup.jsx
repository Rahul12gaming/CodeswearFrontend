import {useState} from 'react'
import'./signup.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import FaceIcon from '@mui/icons-material/Face'
import {useDispatch} from 'react-redux'
import { SignupUser } from '../actions/userAction';
import {enqueueSnackbar} from 'notistack'
export const Signup=()=>

{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [gender,setGender]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=()=>
    {
        if(!name || !email || !password || !gender)
        {
            return enqueueSnackbar("Form Is Empty",{variant:"error"})
        }
        else if(!email.includes('@'||'.com'))
        {
            return enqueueSnackbar("Email Is Invalid",{variant:"error"})
        }
        if(password.length<8)
        {
            return enqueueSnackbar("Password Must Be of 8Digits",{variant:"error"})
        }
        dispatch(SignupUser(name,email,password,gender));
        window.location.href='/'
    }
    return (
        <>
            <div className="signup-container">
                <p className='login-title'>Signup</p>

                    <div className="email">
                        <FaceIcon/>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name'/>
                    </div>

                    <div className="email">
                        <MailOutlineIcon/>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Your Email'/>
                    </div>

                    <div className="email">
                        <LockOpenIcon/>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Your Password'/>
                    </div>
                    <div className="email">
                        <LockOpenIcon/>
                        <input value={gender} onChange={(e)=>setGender(e.target.value)} type="text" placeholder='Your Gender'/>
                    </div>
                    

                    <a href="/login">Already Have an Account?</a>
                    <button onClick={handleSubmit} type="submit" className='signup-btn'>Signup</button>
               
            </div>
        </>
    )
}