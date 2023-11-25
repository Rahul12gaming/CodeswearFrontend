import { FormControl, FormControlLabel, Radio, RadioGroup, Rating, Slider } from '@mui/material';
import {Link} from 'react-router-dom'

export const ProductCard=({product})=>
{
    return(
        <>
             
                    <Link className='product-card' to={`/product/${product._id}`}>
                    <div >
                        <div className="product-img">
                        <img src={product.images[0]}/>
                        </div>
                        <p>{product.title}</p>
                        <div>
                            <Rating readOnly={true} value={product.rating} size='10px' />
                            <div>
                                <span className='price'>₹{product.price}</span>
                            </div>
                        </div>
                    </div>
                    </Link>
        </>
    )
}