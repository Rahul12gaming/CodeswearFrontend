import { DashboardSideBar } from "./dashboardSidebar"
import './adminUser.css'
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { gettAllUsers } from "../actions/userAction"
import EditIcon from '@mui/icons-material/Edit';
import { MetaData } from "../layout/metaData"
export const AdminUser = () => {
    const { allUser } = useSelector((state) => state.adminUser)
    if(window.innerWidth<1080)
        {
            window.location.href='/'
        }
    const dispatch = useDispatch();
    useEffect(() => {
        console.log();
        
        dispatch(gettAllUsers())
    }, [dispatch])
    return (
        <>
        <MetaData title={`AdminUsers | | Codeswear`}/>
            <div className="dashboard">
                <DashboardSideBar />
                <div className="adminUsers">
                    <h2>ADMIN PANNEL</h2>
                    <p>Users</p>
                    <div className="usersContainer">
                        <div className="userField">
                            <div className="div">
                                <span>User Id</span>
                            </div>
                            <div className="div">
                                <span>User Name</span>
                            </div>
                            <div className="div">
                                <span>User Email</span>
                            </div>
                            <div className="div">
                                <span>User Role</span>
                            </div>
                            <div className="div">
                                <span>Make Admin</span>
                            </div>
                        </div>

                        {/* {
                            allUser && allUser.map((item)=>(
                                <div className="userItems">
                            <div className="div">
                                <span>#{item._id}</span>
                            </div>
                            <div className="div">
                                <span>{item.name}</span>
                            </div>
                            <div className="div">
                                <span>{item.email}</span>
                            </div>
                            <div className="div">
                                <span>{item.role}</span>
                            </div>
                            <div className="div">
                                 <select name="" id="">
                                    <option value="">select</option>
                                    <option value="">Make Admin</option>
                                    <option value=""><button>Delete User</button></option>
                                </select>
                            </div>
                        </div>
                            ))
                        } */}

                        <div className="userItems">
                            <div className="div">
                                <span>#hytutu</span>
                            </div>
                            <div className="div">
                                <span>tututiti</span>
                            </div>
                            <div className="div">
                                <span>jhiyiyyoo</span>
                            </div>
                            <div className="div">
                                <span>jgjgkgh</span>
                            </div>
                            <div className="div">
                                <select name="" id="">
                                    <option value="">select</option>
                                    <option value="">Make Admin</option>
                                    <option value=""><button>Delete User</button></option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}