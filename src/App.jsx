import React from "react";
import { X, Eye } from "lucide-react";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Checkout from "./Components/Checkout";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Preview from "./Components/Preview";

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
       <Hero />
      {/* Features Section - List Style */}
      <Features />
      {/* Preview Section */}
      <Preview />
      {/* FAQ Section */}
      <Faq />
      {/* Checkout Section */}
      <Checkout />
      {/* Footer Section */}
      <Footer />

    </div>
  );
}
