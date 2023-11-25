// import logo from './logo.svg';
import './App.css';
import { CheckoutSteps } from './components/cart/checkoutStep';
import { Home } from './components/home/home'
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { Products } from './components/product/product';
import { Signup } from './components/user/signup';
import { Login } from './components/user/login';
import { Details } from './components/productDetails/Details';
import { Cart } from './components/cart/cart';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './components/actions/userAction';
import { Shipping } from './components/cart/shipping';
import { ConfirmOrder } from './components/cart/confirmOrder';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import { Payment } from './components/cart/payment';
import { ProtectedRoute } from './protected';
import { OrderSuccess } from './components/cart/orderSuccess';
import { UserProfile } from './components/user/userProfile';
import { MyOrders } from './components/order/myOrder';
import { OrderDetails } from './components/order/orderDetails';
import { AdminDashboard } from './components/adminUser/adminDashboard';
import { AdminUser } from './components/adminUser/adminUser';
import { AdminProducts } from './components/adminUser/adminProducts';
import { AdminOrder } from './components/adminUser/adminOrder';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { amber } from '@mui/material/colors';
// import { Loader } from './components/layout/loader/loader';

function App() {
  const { loading } = useSelector((state) => state.user)
  const [stripeApiKey, setStripeApiKey] = useState("")

  const dispatch = useDispatch();
  const getApiKey = async () => {
    const { data } = await axios.get('https://backend2-sbis.onrender.com/stripe/apikey')
    setStripeApiKey(data.stripeApiKey)
  }
  useEffect(() => {
    dispatch(loadUser());
    getApiKey()
  }, [])
  return (
    <>


      <Router >
        <Header />

        {
          stripeApiKey && (

            <Elements stripe={loadStripe(stripeApiKey)}>
              <Routes>
                <Route path='/payment' element={<Payment />} />
              </Routes>

            </Elements>
          )
        }


        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product/:id' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path={'/shipping'} element={
            <ProtectedRoute>
              <Shipping />
            </ProtectedRoute>
          } />
          <Route path={'/confirmOrder'} element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
          <Route path={'/orderSuccess'} element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
          <Route path={'/userProfile'} element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path={'/myOrders'} element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
          <Route path={'/orderDetails/:id'} element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
          <Route path={'Dashboard'} element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path={'admin/users'} element={<ProtectedRoute><AdminUser /></ProtectedRoute>} />
          <Route path={'admin/products'} element={<ProtectedRoute><AdminProducts /></ProtectedRoute>} />
          <Route path={'admin/orders'} element={<ProtectedRoute><AdminOrder /></ProtectedRoute>} />
        </Routes>

        <Footer />

      </Router>

    </>
  );
}

export default App;
