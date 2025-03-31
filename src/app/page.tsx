// "use strict";
import Hero from "../app/comp/hero"
import Trending from "../app/comp/trending"
import Service from "../app/comp/service"
import About from "../app/comp/about"
// import Contact from "../app/comp/contact"



export default function Home() {
  return (
    <div >
      
      <Hero />
      <Trending/>
      <Service />
      <About />
      
    </div>
  );
}
