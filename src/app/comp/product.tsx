import Link from "next/link"

interface IProduct {
  id : number ,
  name: string,
  price: number,
  url : string

}

const Product = async () => {

  const res = await fetch ("http://localhost:3000/api/products")
  const data : IProduct[] = await res.json()



  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <div className='my-5 text-center'>
      <span className='text-3xl  border-b-4'>Trending products</span>
      </div>
      <div className='product flex justify-evenly items-center px-12 flex-wrap'>
      {data.map ((pro) => {
        return (
         <section key={pro.id} className='box1 border-card  shadow-2xl my-7 hover:scale-105 duration-200 mx-1'>
           <div className='py-5 '>    
               <img src={pro.url} alt={pro.name} width={250} height={150}  className='rounded-2xl pl-1'/>
            <div className='flex justify-between px-2 py-3 font-semibold text-lg'>
               <h2 className='text'>{pro.name}</h2>
               <p>{pro.price}</p>
            </div>
            <div>
              <Link href={'https://www.instagram.com/direct/t/17844652409996520'} target="_blank"> <span className="hero-btn"> Order now </span> </Link>
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