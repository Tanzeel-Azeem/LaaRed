import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { AlignJustify,} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <section className='hero background  flex justify-between items-center px-5 sticky top-0 z-50 '>
        <div>
            {/* <Image src={'/logo2.jpeg'} alt="LaaRed's logo" width={2000} height={100}/> */}
           <Link href={'/'}> <Image src="/logo2.jpeg" alt="" width={150} height={50} /></Link>
        </div>
        <div className=' md:hidden flex items-center'>
        <Sheet>
            <SheetTrigger> <AlignJustify className='logo h-8 w-8 '/></SheetTrigger>
            <SheetContent className='background h-96 w-72 mr-3 rounded-2xl '>
                <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription className=''>
                  <div className='flex justify-center items-center'>
                  <img src="logo2.jpeg" alt="" width={200} height={50} />
                  </div>
                    <ul className='color text-lg text-black font-serif cursor-pointer ml-5'>
                        <Link href={'/'}><li className='color  hover:scale-110 duration-300'>Home</li></Link>
                        <Link href={'/products'}><li className='color  hover:scale-110 duration-300'>Products</li></Link>
                        <Link href={'#service'}><li className='color  hover:scale-110 duration-300'>Services</li></Link>              
                        <Link href={'#about'}><li className='color  hover:scale-110 duration-300'>About</li></Link>
                        <Link href={'#contact'}><li className='color  hover:scale-110 duration-300'>Contact</li></Link>
                    </ul>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>  
       
        </div>
        <div  className='hidden md:block'>
           <ul className='flex space-x-6 text-base lg:text-lg  font-serif cursor-pointer py-5 '>
              <Link href={'/'}><li className='font-serif font-normal hover:scale-110 duration-300'>Home</li></Link>
              <Link href={'/products'}><li className='font-serif font-normal hover:scale-110 duration-300'>Products</li></Link>
              <Link href={'#service'}><li className='font-serif font-normal hover:scale-110 duration-300'>Services</li></Link>
              <Link href={'#about'}><li className='font-serif font-normal hover:scale-110 duration-300'>About</li></Link>
              <Link href={'#contact'}><li className='font-serif font-normal hover:scale-110 duration-300'>Contact</li></Link>
            </ul>
        </div>
    </section>
  )
}

export default Header