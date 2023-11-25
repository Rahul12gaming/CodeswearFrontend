import './signup.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import FaceIcon from '@mui/icons-material/Face'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../layout/loader/loader'
import { Alert } from '@mui/material'
import { useSnackbar } from 'notistack'
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {enqueueSnackbar}=useSnackbar();
    // const {loading,isAuthenticated} =useSelector((state)=>state.user)
    const { error,loading, inAuthenticated } = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const handleLogin = () => {

        dispatch(LoginUser(email, password));


    }
    useEffect(() => {
        if(error)
        {
              alert(error)
             enqueueSnackbar(error,{variant:"error"});
           
        }
        if (inAuthenticated) {

            navigate("/")
        }
    }, [inAuthenticated, dispatch,error,enqueueSnackbar])


    return (
        <>

            <div className="login-container">
                <p className='login-title'>Login </p>
                {/* <span>MERN Store</span> */}
                <div className="email">
                    <MailOutlineIcon />
                    <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="password">
                    <LockOpenIcon />
                    <input type="text" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <a href="/signup">Become a User!</a>
                <button onClick={handleLogin} type='submit'>Login</button>

            </div>
        </>
    )
}