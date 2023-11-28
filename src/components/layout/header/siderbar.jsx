import { useSelector } from 'react-redux'
import './sidebar.css'
export const Sidebar = ({ setHeader,categories,setCategory,cart }) => {

    const { inAuthenticated } = useSelector((state) => state.user)
    return (
        <>
            <div className="sidebar">
                <div className="close">
                    <span class="fa-solid fa-xmark" onClick={() => { setHeader(false) }}></span>
                </div>

                <div className="sidebar-content">
                    <span class="title">Shop by Category</span>
                    {categories.map((item)=>(
              <a href='/product' key={item} onClick={()=>{setCategory(item) 
                 localStorage.setItem('category',JSON.stringify(item))}}>{item}</a>
            ))}
            <span style={{cursor:'pointer'}} class="fa-solid fa-bag-shopping" onClick={()=>window.location.href='/cart'}>{cart.length!==0 && <sup className='sup'>{cart.length}</sup>}</span>

                    {
                        inAuthenticated ?
                            <>

                            </> :
                            <>
                                <a href="/login" ><button className='loginBtn'>Login</button></a>
                                <a href="/signup" ><button className='signupBtn'>Singup</button></a>
                            </>
                    }

                </div>


            </div>
            <div className="backdrop"></div>
        </>
    )
}