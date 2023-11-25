import './home.css'
import Carousel from "react-material-ui-carousel"


export const Home = () => {
    return (
        <div className="home">
            <div className="carouselBox">
                <Carousel className='carousel' navButtonsAlwaysVisible IndicatorIcon={false} autoPlay animation="slide">
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/6.webp' alt="" />
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/2.webp' alt="" />
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/3.webp' alt="" />
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/4.webp' alt="" />
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/5.webp' alt="" />
                    <img src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/1.webp' alt="" />
                </Carousel>
            </div>

            <span className='category'>Categories</span>
            <div className="brands-section">

                <div>
                    <img   src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/hoodie.webp' alt="" />
                   
                </div>
                <div>
                    <img  src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/caps.webp' alt="" />

                </div>
                <div>
                    <img  src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/tshirt.webp' alt="" />

                </div>
                <div>
                    <img  src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/sweatshirt.webp' alt="" />

                </div>
                <div>
                    <img  src='https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/oversizedtshirt.webp' alt="" />

                </div>

            </div>
            <span className='themeText'>Upcoming Theme</span>
            <div className="themeSection">
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/anime.webp" alt="" />
                </div>
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/combooffers.webp" alt="" />
                </div>
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/customized.webp" alt="" />
                </div>
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/fitness.webp" alt="" />
                </div>
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/gaming.webp" alt="" />
                </div>
                <div className="div">
                    <img loading="lazy" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/lifestyle.webp" alt="" />
                </div>
                <div className="div"></div>
            </div>
            <div className="features">
                <div className="div">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path></svg>
                    <span>Premium T-shirts</span>
                    <p>Our T-Shirts are 100% made of cotton.</p>
                </div>
                <div className="div">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path></svg>
                    <span>Premium T-shirts</span>
                    <p>Our T-Shirts are 100% made of cotton.</p>
                </div>
                <div className="div">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path></svg>
                    <span>Premium T-shirts</span>
                    <p>Our T-Shirts are 100% made of cotton.</p>
                </div>
            </div>

        </div>
    )
}