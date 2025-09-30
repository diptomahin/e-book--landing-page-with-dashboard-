import React, { useState } from "react";
import { X, Eye } from "lucide-react";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Checkout from "./Components/Checkout";

export default function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Preview pages (shortened version)
  const previewPages = [
    {
      num: 1,
      content:
        "Introduction to IELTS Writing Task 2\n\nMastering IELTS Writing Task 2 requires strategic preparation and understanding of examiner expectations. This comprehensive guide will help you achieve Band 7 or higher.",
    },
    {
      num: 2,
      content:
        "Understanding Essay Types\n\n• Opinion Essays\n• Discussion Essays\n• Problem-Solution Essays\n• Advantage-Disadvantage Essays\n\nEach type requires a specific approach and structure.",
    },
    {
      num: 3,
      content:
        "Task Achievement\n\nFully address all parts of the task\nPresent a clear position throughout\nSupport main ideas with relevant examples\nEnsure ideas are fully extended and supported",
    },
    {
      num: 4,
      content:
        "Coherence and Cohesion\n\nLogical organization of information\nEffective use of paragraphing\nUse cohesive devices appropriately\nMaintain clear progression throughout",
    },
    {
      num: 5,
      content:
        "Lexical Resource\n\nUse a wide range of vocabulary\nUse less common lexical items\nDemonstrate awareness of style and collocation\nMinimize errors in spelling and word formation",
    },
    {
      num: 6,
      content:
        "Grammatical Range and Accuracy\n\nUse a variety of complex structures\nProduce frequent error-free sentences\nDemonstrate good control of grammar\nMake only occasional minor errors",
    },
    {
      num: 7,
      content:
        "Essay Structure Template\n\nIntroduction (2-3 sentences)\nBody Paragraph 1 (4-5 sentences)\nBody Paragraph 2 (4-5 sentences)\nConclusion (2-3 sentences)\n\nTotal: 250-280 words",
    },
    {
      num: 8,
      content:
        "Common Mistakes to Avoid\n\n❌ Going off-topic\n❌ Not answering the question\n❌ Memorizing essays\n❌ Using informal language\n❌ Writing less than 250 words\n\n[Continue reading to learn more...]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          {/* Quote Block */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <p className="text-lg md:text-2xl italic text-gray-300 relative">
              <span className="absolute -left-4 -top-4 text-5xl font-bold text-white">
                “
              </span>
              IELTS Writing-এ Band 7+ পাওয়ার পূর্ণাঙ্গ গাইড
              <span className="absolute -right-4 -bottom-6 text-5xl text-white">
                ”
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition duration-500">
                <img
                  src="/imageOne.png"
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
                <li>
                  📝 ২টি পরীক্ষিত Structure দিয়েই সবধরনের Essay লেখার উপায়
                </li>
                <li>📖 ৩০+ মডেল উত্তর</li>
                <li>⏳ শিখুন মাত্র ১০-১৫ দিনে</li>
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/#checkout">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                    Order Now - ৳10
                  </button>
                </a>
                <button
                  onClick={() => setShowPreview(true)}
                  className="border-2 border-blue-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-400/10 transition flex items-center justify-center gap-2"
                >
                  <Eye size={20} /> Preview eBook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - List Style */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
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
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl shadow-md">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-300">{item.text}</p>
              </li>
            ))}
          </ul>

          {/* Centered Button */}
          <div className="flex justify-center mt-10">
            <a href="#checkout">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                Order Now - ৳10
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Preview the eBook
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Get a glimpse of what's inside
          </p>

          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  Page {previewPages[currentPage].num} of {previewPages.length}
                </span>
                <span className="text-sm">Preview Version</span>
              </div>
            </div>

            <div className="p-8 md:p-12 min-h-[400px] bg-white text-gray-800">
              <div className="whitespace-pre-line text-lg leading-relaxed">
                {previewPages[currentPage].content}
              </div>
            </div>

            <div className="bg-slate-800 p-4 flex justify-between items-center">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Previous
              </button>
              <div className="flex gap-2">
                {previewPages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentPage ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage(
                    Math.min(previewPages.length - 1, currentPage + 1)
                  )
                }
                disabled={currentPage === previewPages.length - 1}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              Want to read the complete eBook with all 150+ pages?
            </p>
            <a href="#checkout">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
                Get Full Access Now
              </button>
            </a>
          </div>
        </div>
      </section>
      <Faq />
      <Checkout />
      <Footer />
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">eBook Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-white text-gray-800">
              <div className="whitespace-pre-line text-lg leading-relaxed mb-8">
                {previewPages[currentPage].content}
              </div>
            </div>

            <div className="bg-slate-800 p-4 flex justify-between items-center border-t border-slate-700">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Previous
              </button>
              <span className="font-semibold">
                Page {currentPage + 1} / {previewPages.length}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(
                    Math.min(previewPages.length - 1, currentPage + 1)
                  )
                }
                disabled={currentPage === previewPages.length - 1}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
