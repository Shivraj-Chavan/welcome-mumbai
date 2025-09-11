import Image from "next/image";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
        <Image
          src="/logo/MAZHIMUMBAI.jpg"
          alt="Mumbai Logo"
          width={190}    
          height={53} 
          priority
          className="h-12 w-auto object-contain "  
        />
      </Link>


        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-600 text-sm text-center sm:text-left">
          
          {/* Email */}
          <div className="flex items-center gap-2">
            <FiMail className="text-orange-500 text-base" />
            <span className="truncate max-w-[180px] sm:max-w-none">mazhimumbainfo@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FiPhone className="text-red-600 text-base" />
            <span>+91 9619363738</span>
          </div>
        </div>
      </div>
    </header>
  );
}
