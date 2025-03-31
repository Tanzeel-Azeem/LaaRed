import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero background max-w-screen-2xl mx-auto  px-17  flex justify-center xl:justify-between items-center flex-wrap'>
      <div className='w-[500px] my-20 text-center lg:mr-20 xl:mr-0'>
        <span className='text color text-5xl   xl:text-7xl  font-bold cursor-default '> Jewelry that Speaks Your Language. </span> <br />
        <div className='mt-5  cursor-default  '>
           <span className='text color text-xl font-serif font-semibold   '> Explore our Curated collection of stylish  accessories tailored to your Unique taste . </span>
        </div>
        
        
        
        <br /><br />
        <div className='flex justify-center'>
          <Link href={'/products'} ><span className='hero-btn w-64 md:w-72 text-center cursor-pointer'> Explore the Collection  </span></Link>
        </div>
      </div>
      <div className='shadow-img pb-20'>
        <Image src={'https://ae01.alicdn.com/kf/H04a4db2a58e240b8b6261e9feb54978ah/New-Baroque-Freshwater-Natural-Pearl-Moonstone-Pendant-Necklace-Geometric-Irregular-Aesthetic-Jewelry-for-Women-Girls-Party.jpg'} alt='Hero Image' height={600} width={500} className='image-hero' />
      </div>
    </div>
  )
}

export default Hero