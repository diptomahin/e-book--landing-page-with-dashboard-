import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
  return (
    <div className="fixed w-full top-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-blue-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MAGIC SCORE
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
            <a href="#preview" className="hover:text-blue-400 transition">
              Preview
            </a>
            <a href="#faq" className="hover:text-blue-400 transition">
              FAQ
            </a>
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Features
            </a>
            <a
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Preview
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setShowCheckout(true);
                setMobileMenuOpen(false);
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-full font-semibold"
            >
              Order Now
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
