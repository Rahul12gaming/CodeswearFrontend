import { Link } from 'react-router-dom'
import './dashboard.css'

import { Line,Doughnut ,Bar} from 'react-chartjs-2'
import {CategoryScale,LinearScale,Chart,PointElement,LineElement,Tooltip,ArcElement,BarElement} from 'chart.js'
import { DashboardSideBar } from './dashboardSidebar'
import { MetaData } from '../layout/metaData'
export const AdminDashboard=()=>
{
    Chart.register(CategoryScale,LinearScale,PointElement,LineElement,ArcElement,BarElement)
    const data={
        labels:["Mens","Womens","Electronics",'Others'],
        datasets:[
            {
                label:"Products Data",
                data:[3,5,8,0],
                backgroundColor:['aqua','tomato','white'],
                borderWidth:1
            },
            
        ]
    }
    const options ={

    }
   
    return (
        <>
        <MetaData title={`AdminDashboard | | Codeswear`}/>
            <div className="dashboard">

                <DashboardSideBar/>
                <div className="dashboardSummary">
                   <p>Admin Pannel</p>
                   <div className="pannel-details">
                    <div className="prod">
                        <span>No. of Products</span>
                        <p>5</p>
                    </div>
                    <div className="prod">
                        <span>Total Users</span>
                        <p>5</p>
                    </div>
                    <div className="prod">
                        <span>Total Orders</span>
                        <p>5</p>
                    </div>
                   </div>
                     
                    <div style={{marginTop:'60px',border:'1px solid #fff',display:'inline-block',padding:'40px',borderRadius:'10px'}}>
                        <span>Products Data</span>
                    <Bar style={{width:'500px',margin:'auto',height:'auto'}} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    )
}