import { Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-10 pb-20 px-4">
      <div className="container mx-auto">
        {/* Quote Block */}
        <div className="max-w-3xl mx-auto text-center pb-10">
          <p className="text-lg md:text-2xl italic text-gray-300 relative">
            <span className="text-5xl font-bold text-white">“</span>
            Secret Tricks & Proven Techniques যা দিয়ে IELTS রাইটিং টাস্ক ২ এ{" "}
            <br />
            7-{""}7+{""}হবে{""}আরো{""}সহজ।
            <span className=" text-5xl text-white">”</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition duration-500">
              <img
                src="/imageThree.png"
                alt="Magic Score Book Cover"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl shadow-blue-500/30"
              />
            </div>

            {/* Bonus Text */}
            <div className="relative z-20 mt-4 text-center">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg">
                🎁 Bonus: 2 free classes with every purchase!
              </span>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-20 animate-pulse"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {" "}
              যে ট্রিকস কেউ শেখাতে চায় না সব একসাথে এই বইতে। <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}
                শিখুন Professor Maverick এর সাথে।{" "}
              </span>{" "}
            </h1>
            {/* List Section */}
            <ul className="space-y-3 text-lg md:text-xl text-gray-300">
              <li>
                📘 বাংলায় ব্যাখ্যাসহ Task Response ও Coherence শেখার একমাত্র
                পূর্ণাঙ্গ বই
              </li>
              <li>📝 ২টি পরীক্ষিত Structure দিয়েই সবধরনের Essay লেখার উপায়</li>
              <li>📖 ৩০+ মডেল উত্তর</li>
              <li>⏳ শিখুন মাত্র ১০-১৫ দিনে</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/#checkout">
                <button className="bg-gradient-to-r w-full from-blue-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                  Order Now - ৳10
                </button>
              </a>
              <a href="#preview">
                <button className="border-2 border-blue-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-400/10 transition flex items-center justify-center gap-2">
                  <Eye size={20} /> Preview eBook
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
