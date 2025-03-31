import { FaGem, FaRocket, FaUndo, FaHeart } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#F5EDE3] mt-6 py-16 px-6 md:px-16 text-center cursor-default">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8B3D26] relative inline-block">
          Our Services
          {/* <span className="absolute -top-3 -right-3 text-yellow-500">✨</span> */}
        </h2>
        <p className="text-xl md:text-2xl text-[#8B3D26] mt-2">Because You Deserve the Best</p>
        <p className="text-gray-900 mt-4 text-lg">
          At LaaReds, we {"don’t"} just sell accessories we craft little moments of
          joy, confidence, and self-expression. Whether {"you’re"} dressing up for
          a night out or adding a subtle sparkle to your everyday look,{" we’ve"}
          got you covered.
        </p>

        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <FaGem className="text-blue-500 text-4xl" />
            <h3 className="text-xl font-semibold text-[#8B3D26] mt-3">Handpicked Accessories</h3>
            <p className="text-gray-600 mt-2">From elegant earrings to statement rings, each piece is curated to make you feel effortlessly chic.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <FaRocket className="text-red-500 text-4xl" />
            <h3 className="text-xl font-semibold text-[#8B3D26] mt-3">Fast & Secure Shipping</h3>
            <p className="text-gray-600 mt-2">No more waiting forever! Your favorites arrive at your doorstep, safe and sound.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <FaUndo className="text-orange-500 text-4xl" />
            <h3 className="text-xl font-semibold text-[#8B3D26] mt-3">Hassle-Free Returns</h3>
            <p className="text-gray-600 mt-2">Changed your mind? No worries! We make returns and exchanges easy, because shopping should be stress-free.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <FaHeart className="text-pink-500 text-4xl" />
            <h3 className="text-xl font-semibold text-[#8B3D26] mt-3">Personalized Recommendations</h3>
            <p id="about" className="text-gray-600 mt-2">Not sure what suits your style? Let us help! Our team loves making fashion effortless for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
