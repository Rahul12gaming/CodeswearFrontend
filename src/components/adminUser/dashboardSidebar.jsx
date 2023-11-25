import './dashboardSidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import RateReviewIcon from '@mui/icons-material/RateReview'
import PeopleIcon from '@mui/icons-material/People'
import { Link } from 'react-router-dom'
export const DashboardSideBar=()=>
{
    return (
        <>
             <div className="adminSidebar">
                    <Link>
                        <span>MERN Store</span>
                    </Link>
                    <div>
                        <PeopleIcon/>
                        <span>User</span>
                    </div>
                    <div>
                        <DashboardIcon/>
                        <span>Dashboard</span>
                    </div>
                    <div>
                        <ListAltIcon/>
                        <span>Orders</span>
                    </div>
                    <div>
                        <RateReviewIcon/>
                        <span>Review</span>
                    </div>
                    
                </div>
        </>

    )
}