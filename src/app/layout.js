import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MapPin, Users, Star, ArrowRight, Phone, Mail, Clock, X, AlertCircle } from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MazhiMumbai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
              MM
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Email */}
            <div className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors group">
              <div className="p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                <Mail className="w-4 h-4 text-orange-600" />
              </div>
              <div className="hidden lg:block">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                <div className="text-sm font-medium">mazhimumbaiinfo@gmail.com</div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
              <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Call Us</div>
                <div className="text-sm font-medium">+91 96193 63738</div>
              </div>
            </div>
            
            {/* Mobile Contact Button */}
            <div className="sm:hidden flex items-center space-x-2">
              <a href="mailto:mazhimumbaiinfo@gmail.com" className="p-2 bg-orange-50 rounded-full hover:bg-orange-100 transition-colors">
                <Mail className="w-4 h-4 text-orange-600" />
              </a>
              <a href="tel:+919619363738" className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
                <Phone className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
        {children}
           <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  MM
                </div>
                <div>
                  <h3 className="text-xl font-bold">Majhi Mumbai</h3>
                  <p className="text-gray-400 italic">Tapri Se Taj Tak</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted local guide connecting you to authentic Mumbai experiences, 
                from street food to luxury services.
              </p>
            </div>
            
          
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 96193 63738</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>mazhimumbaiinfo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Majhi Mumbai. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
