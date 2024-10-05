import React, { useContext, useState,useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const{ products }=useContext(ShopContext);
    const [latestProducts,setlatestProducts]=useState([]);
    useEffect(()=>{
        setlatestProducts(products.slice(0,10));      
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cupiditate maxime, deleniti vero cumque, ipsa a, ducimus nostrum sequi temporibus eius placeat sit incidunt ullam minus facere eum cum nulla.
          </p>
      </div>
     
     {/* Rendering Components */}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
     </div>
    </div>
  )
}

export default LatestCollection