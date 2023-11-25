import { useDispatch,useSelector } from 'react-redux';
import './.products.css';
import { useEffect, useState } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Rating, Slider,Pagination } from '@mui/material';
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp'
import { gettAllProduct } from '../actions/productAction';
import { Loader } from '../layout/loader/loader';
import { ProductCard } from './productCard';
import {enqueueSnackbar} from 'notistack'
import { MetaData } from '../layout/metaData';

export const Products = () => {
    const {loading,products,resultPerPage,productCount,filteredProductCount,error}=useSelector((state)=>state.products)
    
    const [currentPage,setCurrentPage]=useState(1)
    const [category,setCategory]=useState(JSON.parse(localStorage.getItem('category')));
    const [price,setPrice]=useState([0,25000])
    console.log(category);
    const keyword=""
    const priceHandler=(event,newPrice)=>{
        setPrice(newPrice)
    }
    console.log(category);
    // const {product}=useSelector((state)=>state.products.products)
    const dispatch=useDispatch();
   
    useEffect(()=>{
        
        dispatch(gettAllProduct(keyword,currentPage,price,category))
        
    },[dispatch,currentPage,price])
    return (
        <>
            {
                loading?<Loader/>:
                <>
                <MetaData title={`${category} | | Codeswear`}/>
 <h2 className='heading'>Products({products && products.length||0})</h2>
            <div className="products">
                <div className="filter-box">
                    <span className='h1'>Filters</span>
                    <div className="divider"></div>
                    <div>
                        <p>Categories</p>
                        <div className="list">
                            <li value={"Mens"}>Mens</li>
                            <li value={"Womens"}>Women's</li>
                            <li value={"Kids"}>Kid's</li>
                            <li  onClick={(e)=>setCategory(e.target.value)} value={"smartphones"}>Smartphones</li>
                            <li>Laptop</li>
                            <li>Electronics Asscessories</li>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <FormControl>
                        <span>Select Gender</span>

                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"

                        >
                            <FormControlLabel value={"Male"} label="Male" control={<Radio />} />
                            <FormControlLabel value={"Female"} label="Female" control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                    <div className="divider"></div>
                    <div className="slider-box">
                        <span>Price Range</span>
                        <Slider value={price} min={0} max={25000} onChange={priceHandler} valueLabelDisplay='auto' />
                    </div>
                    <div className="divider"></div>

                </div>

                <div className="product-box">
                    {
                        error?<>
                        <div className="error">
                            <ErrorSharpIcon/>
                            <p>Something Went Wrong!</p>
                            <p>Please Try Again Later</p>
                        </div>
                        </>:<>
                        {products && products.map((product)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))}</>
                    }
                    
                </div>
                
                    
                       
                    
            </div>
             <div className='paginationBox'>
               
                            <Pagination
                            page={currentPage}
                            color='primary'
                            count={Number(filteredProductCount/resultPerPage)}
                            
                            onChange={(e,val)=>setCurrentPage(val)}
                        />
                          </div>
                </>
            }
            {/* <h2 className='heading'>Products</h2>
            <div className="products">
                <div className="filter-box">
                    <span className='h1'>Filters</span>
                    <div className="divider"></div>
                    <div>
                        <p>Categories</p>
                        <div className="list">
                            <li>Mens</li>
                            <li>Women's</li>
                            <li>Kid's</li>
                            <li>Winter</li>
                            <li>Laptop</li>
                            <li>Electronics Asscessories</li>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <FormControl>
                        <span>Select Gender</span>

                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"

                        >
                            <FormControlLabel value={"Male"} label="Male" control={<Radio />} />
                            <FormControlLabel value={"Female"} label="Female" control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                    <div className="divider"></div>
                    <div className="slider-box">
                        <span>Price Range</span>
                        <Slider min={100} max={20000} valueLabelDisplay='auto' />
                    </div>
                    <div className="divider"></div>

                </div>

                <div className="product-box">
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} size='10px' />
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>


                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product" />
                        <p>Iphone XR</p>
                        <div>
                            <Rating readOnly={true} value={2.5} />{" "}
                            <div>
                                <span className='price'>₹70,000</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </>
    )
}