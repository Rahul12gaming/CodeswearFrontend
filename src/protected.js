import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./components/user/login"

export const ProtectedRoute = ({children}) => {
    const {inAuthenticated,loading}=useSelector((state)=>state.user)
    return (
        <>
          
           {loading===false && (inAuthenticated?children:<><Navigate to={'/login'}/></>)}
           
           
        </>
    )
}