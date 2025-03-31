 "use client"
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"



const Trending = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
        <div className="py-8 mt-5 text-center">
          <span className="text  text-3xl xl:text-4xl font-semibold realtext"> Our Trending Products ✨</span><br />
          <div className="my-4">
            <span className="text  text-2xl xl:text-3xl font-normal my-4">Get your hands on <br /> the must-have pieces</span>
          </div>
        </div>

        <div >
        

        
        <Carousel 
        plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
         className=" px-2 py-5">
        <CarouselPrevious className="absolute top-80 left-2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50" />
        <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 

            <div className="box1 border-card bg-white shadow-2xl py-4 ">
              <div className="pt-4 ">
                <Image src={'/trend-g-pearl.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className= "text-gray-800 text-lg font-semibold">Golden Pearl Ear Ring</h1>
                  <p className="text-black font-bold">250</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
             </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center">
              <div className="box1 border-card bg-white shadow-2xl py-4  items-center">
                <div className="pt-4 ">
                  <Image src={'/trend-pearl.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
                </div>
                <div className="  py-2 flex justify-between items-center px-3">
                    <h1 className="text-gray-800 text-lg font-semibold">Pearl Ear Ring</h1>
                    <p className="text-black font-bold">250</p>
              </div>
              <div>
                <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
              </div>

              </div>
            </CarouselItem>   
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white  shadow-2xl py-4  items-center">
              <div className="pt-4 ">
                <Image src={'/trend-mobile-bags.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Mobile Bags</h1>
                  <p className="text-black font-bold">1500</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/trend-zaiton-ear-ring.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Zarqoon Ear Rings</h1>
                  <p className="text-black font-bold">1150</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white  shadow-2xl py-4 items-center">
              <div className="pt-4 px-2">
                <Image src={'/trend-zarqoon-necklace.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Zarqoon Necklace</h1>
                  <p className="text-black font-bold">999</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/indian-bali-1.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Indian Bali</h1>
                  <p className="text-black font-bold">650</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/butterfly-ear-rings-1.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Butterfly Ear Ring</h1>
                  <p className="text-black font-bold">350</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/anklet.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-lg font-semibold">Anklet</h1>
                  <p className="text-black font-bold ">300</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/braclet.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-gray-800 text-lg font-semibold">Bracelet</h1>
                  <p className="text-black font-bold">999</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/trend-butterfly-zarqoon.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-lg font-semibold">Butterfly Zarqoon Bracelet</h1>
                  <p className="text-black font-bold">999</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-evenly items-center"> 
               <div className="box1 border-card bg-white shadow-2xl py-4 items-center">
              <div className="pt-4 ">
                <Image src={'/trend-square-ear-rings.jpg'} alt="" width={500} height={200}  className='rounded-2xl pl-1 '/>
              </div>
              <div className="  py-2 flex justify-between items-center px-3">
                  <h1 className="text-lg font-semibold">Square Ear Rings</h1>
                  <p className="text-black font-bold">450</p>
            </div>
            <div id="service">
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>

            </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselNext className="absolute top-80 right-2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"  />

        </Carousel>

 


        </div>
    </div>
  )
}

export default Trending