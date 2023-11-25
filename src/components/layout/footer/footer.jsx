import './footer.css';
export const Footer=()=>
{
    return (
        <>
            <footer>
                <div className="footerContent">
                <div className="div">
                <img style={{width:'10vmax'}}  src='https://www.codeswear.com/logo.png'/>
                    <p>Let's Wear The Street Style Cloths in New Style, and get the best look fit for You.</p>
                </div>
                <div className="div">
                    <span className='text'> Our Category</span>
                    <div className="links">
                        <a href="">Sweatshirt</a>
                        <a href="">T-shirts</a>
                        <a href="">Hoodies</a>
                        <a href="">Oversized T-shirts</a>
                    </div>
                </div>
                <div className="div">
                    <span className='text'>Contact</span>
                    <p>Address</p>
                    <span>Sharda Colony, House No. C-7,Rudrapur, Uttrakhand, 263153</span>
                    <p>Phone </p>
                    <span>+91 1234567895</span>

                </div>
                <div className="div">
                    <span className='text'>Payment</span>
                    <img style={{width:'18vmax',marginTop:'50px'}} src="https://www.codeswear.com/pay.png" alt="" />
                </div>
                </div>
                <div className="copyright">
                    <span>copyright @2023 - Rahul Adhikari</span>
                    
                </div>
            </footer>
        </>
    )
}