import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import './userProfile.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export const UserProfile = () => {
    const {user}=useSelector((state)=>state.user)
 
    return (
        <>
            <div className="userProfile">
                <div className="userIcon">
                    <PersonRoundedIcon />
                </div>
                <div className="userDetails">
                    
                            <>

                                <div>
                                    <span>Name:</span>
                                    <p>{user.user.name}</p>
                                </div>
                                <div>
                                    <span>Email:</span>
                                    <p>{user.user.email}</p>
                                </div>
                               
                            </>
                    
                </div>
            </div>
        </>
    )
}
