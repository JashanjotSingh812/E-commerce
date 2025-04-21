import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Order from './Pages/Order'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Contact from './Pages/PlaceOrder'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
     <Navbar/>
     <SearchBar/>
     <Routes>
         <Route  path='/' element={<Home/>}/>
         <Route  path='/collection' element={<Collection/>}/>
         <Route  path='/about' element={<About/>}/>
         <Route  path='/contact' element={<Contact/>}/>
         <Route  path='/product/:productId' element={<Product/>}/>
         <Route  path='/cart' element={<Cart/>}/>
         <Route  path='/login' element={<Login/>}/>
         <Route  path='/place-order' element={<PlaceOrder/>}/>
         <Route  path='/orders' element={<Order/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
