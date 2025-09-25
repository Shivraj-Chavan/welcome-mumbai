"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [visitCount, setVisitCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchVisitCount() {
      try {
        const res = await fetch("/api/visit");
        const data = await res.json();
        setVisitCount(data.count);
      } catch (err) {
        console.error(err);
      }
    }
    fetchVisitCount();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo + Visit Count (on mobile) */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/logo/MAZHIMUMBAI.jpg"
              alt="Mumbai Logo"
              width={190}
              height={53}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Visit Count - visible on mobile, hidden on desktop */}
          <div className="flex md:hidden items-center ms-20 gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
            Visits: <span>{visitCount}</span>
          </div>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex flex-row items-center gap-6 text-gray-600 text-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <FiMail className="text-orange-500 text-base" />
            <span className=" max-w-[180px]">mazhimumbainfo@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FiPhone className="text-red-600 text-base" />
            <span>+91 9619363738</span>
          </div>

          {/* Visit Count (desktop) */}
          <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
            Visits: <span>{visitCount}</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4 text-gray-600 text-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <FiMail className="text-orange-500 text-base" />
            <span className="truncate">mazhimumbainfo@gmail.com</span>
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
