import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          বইটি তখনই আপনার জন্য যদি...
        </h2>
        <ul className="space-y-6">
          {[
            {
              icon: "✅",
              text: "আপনি IELTS কিংবা যেকোনো ইংরেজি লেখায় আত্মবিশ্বাস নিয়ে পরীক্ষায় অংশ নিতে চান।",
            },
            {
              icon: "✍️",
              text: "আপনি IELTS Writing-এ ভালো নম্বর পেতে আগ্রহী হন।",
            },
            {
              icon: "⚡",
              text: "কম সময়ে পূর্ণাঙ্গ উত্তর লেখার প্রক্রিয়া বুঝে নিতে চান।",
            },
            {
              icon: "📉",
              text: "আপনি বারবার পরীক্ষা দিয়েও Band Score-এ ৬-এর সীমা অতিক্রম করতে না পারেন।",
            },
            {
              icon: "📘",
              text: "আপনি Task Response ও Coherence এর পূর্ণাঙ্গ ধারণা বাংলায় সহজ ভাষায় শিখতে চান।",
            },
            {
              icon: "📝",
              text: "আপনি পরীক্ষার সময় কীভাবে উত্তর গঠন করবেন তা ধাপে ধাপে আয়ত্ত করতে চান।",
            },
            {
              icon: "📚",
              text: "আপনি Writing Task 2-এর জন্য একমাত্র কার্যকরী বাংলা গাইড খুঁজে থাকেন।",
            },
            {
              icon: "😊",
              text: "আপনি আনন্দ নিয়ে, সহজে বুঝে বুঝে নিজে নিজেই পড়তে চান।",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 transition"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-cyan- text-xl shadow-md">
                {item.icon}
              </div>
              <p className="text-lg text-black">{item.text}</p>
            </li>
          ))}
        </ul>

        {/* Centered Button */}
        <div className="flex justify-center mt-10">
          <a href="#checkout">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full text-white text-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
              Order Now - ৳10
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
