import React from 'react';
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 px-4 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start md:items-start">
            <img src="/logo1.png" alt="Magic Score" className="mb-4 w-32" />
            <p className="text-gray-400">
              Your trusted partner for IELTS success
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={16} /> support@sparkaims.com
              </p>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-white font-semibold mb-4">Payment</h4>
            <p className="text-gray-400">We accept bKash payment</p>
            <div className="mt-4 flex gap-4">
              <div className="bg-pink-600 hover:bg-pink-700 transition-colors px-4 py-2 rounded font-bold text-white cursor-pointer">
                bKash
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Sparks Aims. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
