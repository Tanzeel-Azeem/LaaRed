import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#f7d1d1] '>
        <div className='background  flex justify-between items-center text-lg font-serif py-3 '>
            <div>
              <Image src="/laareds-22.jpg" alt="" width={150} height={50} />
            </div>
           
            <div className='flex justify-evenly items-center mr-7'>

            <Link href={"https://www.facebook.com/profile.php?id=100079230413173"} target="_blank" className=" hover:text-blue-600 duration-300 hover:scale-125">
              <div className="flex items-center space-x-3  text-xl ">
                <Facebook />
                {/* <span className="text-gray-800 font-medium  hover:text-blue-600 duration-200">/LaaReds</span> */}
              </div>
            </Link>


          <Link href={"https://www.instagram.com/laareds/"} target="_blank" className=" hover:text-pink-500 duration-300 hover:scale-125 "> 
              <div className="flex items-center space-x-3 my-2 text-xl mx-6">
                <Instagram />
                {/* <span className="text-gray-800 font-medium  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 transition-all duration-300">/LaaReds</span> */}
              </div>  
           </Link>

           <Link href={'tel:03362571538'} target="_blank" className=" hover:text-green-700 duration-300 hover:scale-125 ">
             <div className="flex items-center space-x-3 text-xl mr-6">
              
             <Phone />
                 {/* <span className="text-gray-800 font-medium hover:text-green-800 duration-200" >LaaRed@gmail.com</span> */}
                 </div>
             </Link>

             <Link href={'mailto:laareds07@gmail.com'} target="_blank" >
            <div className="flex items-center space-x-3 my-2 text-xl hover:text-red-500 duration-300 hover:scale-125">
              
                <Mail />
                {/* <span className="text-gray-800 font-medium hover:text-gray-500 duration-200" >LaaRed@gmail.com</span> */}
                </div>
            </Link>

            </div>
        </div>
    </footer>
  )
}

export default Footer