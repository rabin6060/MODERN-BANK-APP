import React from 'react'
import {robot,discount} from "../assets"
import GetStarted from '../GetStarted'
import styles from '../style'

const Hero = () => {
  return (
   <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center
          py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
             <img src={discount} alt="discount" className='w-[26.67px] h-[26.67px]' />
             <p className={`text-white ml-1 ${styles.paragraph}`}>
              <span>20%</span> Discount for {" "}
              <span>1 month</span> Account
             </p>
        </div> 

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]
            text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 '>
            <GetStarted/>
          </div>
        </div>  
        <h1 className='font-poppins font-semibold ss:text-[68px]
            text-[52px] text-white ss:leading-[100px] leading-[75px]'>
             Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[480px] font-poppins font-400 text-[#FFFFFFB2] text-[18px]
         leading-[30.6px] mt-[50px]`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
        </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative`}>
      <img src={robot} alt="robot" className='w-[100%] h-[100%] z-[5] relative'/>
      <div className='w-[40%] h-[30%] z-[0] absolute top-0 pink__gradient'/>
      <div className='w-[80%] h-[80%] z-[1] absolute bottom-20 rounded-full white__gradient'/>
      <div className='w-[50%] h-[50%] z-[0] absolute right-20 bottom-20 blue__gradient'/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter} mt-2`}>
      <GetStarted/>
    </div>
   </section>
  )
}

export default Hero