import DashboardIcon from '@mui/icons-material/Dashboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import RateReviewIcon from '@mui/icons-material/RateReview'
import PeopleIcon from '@mui/icons-material/People'
import './adminSidebar.css'

export const AdminSidebar=()=>
{
    return (
        <>
            <div className="sidebar">
                <a href="">
                    <span>MERN Store</span>
                </a>
                <a href="">
                    <p>
                        <DashboardIcon/> Dashboard
                    </p>
                </a>
                <a href="">
                    <p>
                        <ListAltIcon/> Orders
                    </p>
                </a>
                <a href="">
                    <p>
                        <PeopleIcon/> Users
                    </p>
                </a>
                <a href="">
                    <p>
                        <RateReviewIcon/> Reviews
                    </p>
                </a>
            </div>
        </>
    )
}