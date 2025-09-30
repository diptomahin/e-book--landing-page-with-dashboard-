import React from 'react'
import {
  Mail,
  Phone,
} from "lucide-react";
const Footer = () => {
  return (
      <div className="bg-slate-900 py-12 px-4 border-t border-blue-500/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MAGIC SCORE
              </h3>
              <p className="text-gray-400">
                Your trusted partner for IELTS success
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> support@magicscore.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +880 1XXX-XXXXXX
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Payment</h4>
              <p className="text-gray-400">We accept bKash payment</p>
              <div className="mt-4 flex gap-4">
                <div className="bg-pink-600 px-4 py-2 rounded font-bold">
                  bKash
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Magic Score. All rights reserved.</p>
          </div>
        </div>
      </div>
  )
}

export default Footer
