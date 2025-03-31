import Image from "next/image"
import Link from "next/link"

interface IProduct {
  id : number ,
  name: string,
  price: number,
  url : string

}

const Product = async () => {

  const res = await fetch ("https://laareds-api-8pzp.vercel.app/api/hello")
  const data : IProduct[] = await res.json()



  return (
    <div className='bg-[#fae8e8] max-w-screen-2xl mx-auto'>
      <div className='my-5 mt-40 text-center '>
      <h2 className="text-4xl md:text-5xl font-bold text-[#8B3D26] relative inline-block">
          {"LaaRed's"} Products
          {/* <span className="absolute -top-3 -right-3 text-yellow-500">✨</span> */}
        </h2>
        <p className="text-xl md:text-2xl text-[#8B3D26] mb-2">{"Sparkle, Shine, and Slay!"} ✨💖</p>
      </div>
      <div className='product flex justify-evenly items-center px-12 flex-wrap'>
      {data.map ((pro) => {
        return (
         <section key={pro.id} className='box1 border-card  shadow-2xl my-7 hover:scale-105 duration-200 mx-1'>
           <div className='py-5 '>    
               <Image src={pro.url} alt={pro.name} width={250} height={150}   />
            <div className='flex justify-between px-2 py-3 font-semibold text-lg'>
               <h2 className='text'>{pro.name}</h2>
               <p>{pro.price}</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/laareds/'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
            </div>
          </div>
         </section>
        )
      })}
      </div>
    </div>
  )
}

export default Product