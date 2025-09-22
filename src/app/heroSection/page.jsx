import { LucideBadgeHelp } from "lucide-react";
import React from "react";
import { CiStar } from "react-icons/ci";
import { PiCloudSunBold, PiUsersThreeLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-300 px-6 md:px-16 lg:px-24 py-12">
     <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 gap-x-16 max-w-7xl mx-auto px-4">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 bg-orange-200 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0">
            <CiStar className="text-base text-orange-600 font-semibold" />
            Trusted by Thousands
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Gateway to <span className="text-orange-500">Mumbai</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            From local tea’s to luxury experiences — we connect you to authentic Mumbai.
          </p>

          {/* Subtext */}
          <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto lg:mx-0">
            Professional services, local expertise, trusted guidance for every need
          </p>


        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
        {/* Happy Customers */}
        <div className="flex items-center sm:items-start gap-0 sm:gap-2 min-w-[150px]">
          <PiUsersThreeLight className="text-blue-500 text-xl mt-[2px]" />
          <div>
            <div className="font-bold text-gray-900 text-lg">1000+</div>
            <div className="text-gray-500 text-sm">Happy Customers</div>
          </div>
        </div>

        {/* Years of Expertise */}
        <div className="flex items-center sm:items-start gap-0 sm:gap-2 min-w-[150px]">
          <FaAward className="text-orange-500 text-xl mt-[1px]" />
          <div>
            <div className="font-bold text-gray-900 text-lg">5 Years</div>
            <div className="text-gray-500 text-sm">Local Expertise</div>
          </div>
        </div>
      </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-700 mt-4 max-w-md mx-auto lg:mx-0">
            <span className="font-semibold text-2xl">Ready to Explore Mumbai?</span><br />
            <span className="pt-3">Join thousands of Mumbaikars who trust us for their daily needs</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Link href="/register">
              <button className="bg-orange-500 text-white font-medium px-6 py-2 rounded shadow hover:bg-orange-600 transition">
                Register Now
              </button>
            </Link>
            <Link href="/inquirypg">
              <button className="border border-blue-500 text-blue-500 font-medium px-6 py-2 rounded hover:bg-blue-50 transition">
                Make Inquiry
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-80 rounded-xl shadow-lg overflow-visible mx-auto">
          <Image
            src="/heroimges/gateway.jpg"
            alt="Mumbai"
            width={288}
            height={320}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Marine Drive Tag */}
       <div className="absolute bottom-3 left-3 bg-white px-3 py-2 rounded shadow text-xs font-medium flex items-start gap-2 leading-tight">
        <PiCloudSunBold className="text-orange-400 text-lg mt-[2px]" />
        <div className="flex flex-col leading-tight">
          <span className="text-gray-800">Gateway of India</span>
          <span className="text-gray-400 text-[10px]">Historic Mumbai</span>
        </div>
      </div>

          {/* Floating top-right star badge */}
          <div className="absolute -top-4 -right-4 bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow-md">
            <CiStar className="text-base" />
          </div>

          {/* Floating bottom-left award badge */}
          <div className="absolute -bottom-4 -left-4 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow-md">
            <FaAward className="text-base" />
          </div>
        </div>
      </div>
    </section>
  );
}
