import heroImg from '../assets/heroImg.jpg'
import React, { useContext } from 'react'
import {ProductdataContext} from '../context/MainContext'

const Hero = () => {
  const data = useContext(ProductdataContext)
  return (
    <>
    <div className='h-auto bg-[#406BD1] w-full mt-6 rounded-2xl px-8 py-6 flex justify-center items-center'>
      <div className='w-full flex flex-col items-start justify-start'>
        <h2 className='text-5xl font-semibold text-amber-50 py-3'>Elevate Your Audio Journey</h2>
        <p className='text-amber-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem <br/> tempora adipisci nesciunt voluptatibus deleniti error.</p>
        <p className='text-amber-50' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem <br/> tempora adipisci nesciunt voluptatibus deleniti error.</p>
        <div className='flex py-6'>
        <button className='bg-[#26468f] text-amber-50 px-4 py-2 rounded-xl font-bold mr-2'>Shop Now</button>
        <button className='border-solid border text-amber-50 px-4 py-1.5 rounded-xl ml-2'>Learn More</button>
        </div>
      </div>
      <div className='relative object-cover object-center flex items-start justify-center' >
        {/* <img className='relative bottom-0 ' src={data[13].image} alt="" height={400} width={400}/> */}
      </div> 
    </div>
    </>
  )
}

export default Hero