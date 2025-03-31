export default function About() {
    return (
      <section  className="bg-[#FAF3E3] text-[#7A3E2D] py-16 px-6 md:px-12 lg:px-24 cursor-default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About LaaReds ✨</h2>
          <p className="text-lg md:text-xl font-semibold text-[#8A3D2E] mb-6">
            More Than Just Accessories, {"It’s"} an Expression
          </p>
          <p className="text-gray-900 leading-relaxed">
            At LaaReds, we believe accessories {"aren’t"} just add-ons—{"they’re"} the finishing touch to your confidence, the sparkle in your personality, and the tiny details that make a big statement.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-[#7A3E2D] text-center">Why LaaReds?</h3>
          <div className="space-y-4 ">
            <div className="flex items-start gap-4 " >
              <span className="text-2xl">💎</span>
              <p className="text-gray-700">
                <strong className="text-[#7A3E2D]">Handpicked Perfection</strong> {"–"} Every piece is thoughtfully chosen to match your vibe.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💎</span>
              <p className="text-gray-700">
                <strong className="text-[#7A3E2D]">Trendy, Yet Timeless</strong> {"–"} Accessories that stay stylish beyond seasons.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💎</span>
              <p className="text-gray-700">
                <strong className="text-[#7A3E2D]">You-Centric Shopping</strong> {"–"} Easy, hassle-free, and tailored to your style.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mt-10 text-gray-700">
          <p id="contact" className="italic">We {"don’t"} just sell accessories—we help you <strong>wear your story</strong>. So go ahead, mix, match, layer, and shine—because you deserve nothing less than extraordinary. ✨</p>
        </div>
      </section>
    );
  }
  