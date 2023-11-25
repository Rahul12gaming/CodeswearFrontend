import { useSelector } from 'react-redux'
import './sidebar.css'
export const Sidebar = ({ setHeader }) => {
    const { inAuthenticated } = useSelector((state) => state.user)
    return (
        <>
            <div className="sidebar">
                <div className="close">
                    <span class="fa-solid fa-xmark" onClick={() => { setHeader(false) }}></span>
                </div>

                <div className="sidebar-content">
                    <span class="title">Shop by Category</span>
                    <a href="">Womens</a>
                    <a href="">Mens</a>
                    <a href="">Kids</a>
                    <a href="">Bags</a>

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