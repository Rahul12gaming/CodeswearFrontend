import { useEffect, useState } from 'react'
import './header.css'
import {useDispatch, useSelector} from 'react-redux'
import { Sidebar } from './siderbar';
import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { getAdminProducts, gettAllProduct } from '../../actions/productAction';
import axios from 'axios';
export const Header = () => {
  const categories=[
    "sweatshirt",
    "hoodies",
    "t-shirt",
    'joggers'
  ]
  const [search,setSearch]=useState("")
  const [currentPage,setCurrentPage]=useState(1)
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState([0,25000])
  const dispatch=useDispatch()
    const keyword=""
  console.log(category);
  const [open,setOpen]=useState(false)
  const [header,setHeader]=useState(false);
  const {loading,inAuthenticated,user}=useSelector((state)=>state.user)
  const {products}=useSelector((state)=>state.products)
  const {cart}=useSelector((state)=>state.cart)
  const options=[
    {icon:<ListAltIcon/>,name:"Orders"},
    {
      icon:<PersonIcon/>,name:"Profile"
    }
  ]
  useEffect(()=>{
    dispatch(getAdminProducts())
  },[dispatch])
  
  const handleSearch=(e)=>{
    setSearch(e.target.value)
    const data=products.find((x)=>x.title!==search)
    console.log(data);
  }
  const handleLogout=async()=>{
    const {data}=await axios.get('http://localhost:4000/auth/logout',{withCredentials:true});
    window.location.href='/';
    
  }

  return (
    <>
    
    <marquee  className="overlay" loop="-1">Sale!  Sale!  Sale!  Sale!  Sale!  Sale!  Sale!  Sale!  Sale!  Sale! </marquee>
      <header>
      {
              header?<Sidebar setHeader={setHeader} categories={categories} setCategory={setCategory} cart={cart}/>:<></>
      }
        <div className="header-content">
          <div className="logo">
            <span class="bars-icon fa fa-bars" aria-hidden="true" onClick={()=>{ setHeader(!header)}}></span>
            
            
            <img className='logoImg'  src='https://www.codeswear.com/logo.png'/>
          </div>
         
          <div className="links">
            <span style={{cursor:'pointer'}} class="fa-solid fa-bag-shopping" onClick={()=>window.location.href='/cart'}>{cart.length!==0 && <sup className='sup'>{cart.length}</sup>}</span>
            {categories.map((item)=>(
              <a href='/product' key={item} onClick={()=>{setCategory(item) 
                 localStorage.setItem('category',JSON.stringify(item))}}>{item}</a>
            ))}
         
           
            {inAuthenticated? <>
           <Backdrop open={open} style={{zIndex:'10'}}/>
              <SpeedDial 
              ariaLabel='SpeedDial tooltip example'
              
             onOpen={()=>setOpen(true)}
             onClose={()=>setOpen(false)}
              open={open}
              direction='down'
              style={{zIndex:"11"}}
              className='speedDial'
              sx={{ position: 'absolute',top:80,right:20}}
              icon={
              <span style={{fontSize:'14px',color:'#fff'}}>{user.user.name}</span>
              }>

                  
                    
                      <SpeedDialAction 
                      icon={<ListAltIcon/>}
                      tooltipTitle={"Orders"}
                      />
                      <SpeedDialAction 
                      icon={<PersonIcon/>}
                      tooltipTitle={"Profile"}
                      onClick={()=>window.location.href='/userProfile'}
                      />
                      <SpeedDialAction 
                      icon={<ListAltIcon/>}
                      tooltipTitle={"Orders"}
                      />
                    
                  
              </SpeedDial>
            </>:<>
            </>}
           {inAuthenticated?<>
            <div className="btns">
              
              <button onClick={handleLogout}>LogOut</button>
            </div>
           </>:<>
           <div className="btns">
              
              <button onClick={()=>window.location.href='/signup '}>Singup</button>
            </div>
           </>}
          </div>
        </div>
      </header>
    </>
  )

}