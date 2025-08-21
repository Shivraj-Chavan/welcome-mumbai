"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MajhiMumbaiLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    { title: "Gateway of India", subtitle: "Historic Mumbai", src: "/heroimges/gateway.jpg" },
    { title: "Local Street Food", subtitle: "Authentic Flavors" , src: "/heroimges/streetfood.jpg" },
    { title: "Marine Drive", subtitle: "Queen's Necklace", src: "/heroimges/marine.jpg"  }
  ];

  const services = [
    { icon: "🏠", title: "Housing Services", desc: "Find your perfect home in Mumbai" },
    { icon: "🚗", title: "Transportation", desc: "Navigate the city with ease" },
    { icon: "🍽️", title: "Food & Dining", desc: "Discover local gems and restaurants" },
    { icon: "💼", title: "Business Support", desc: "Connect with local businesses" },
    { icon: "🎯", title: "Local Guidance", desc: "Expert advice for city living" },
    { icon: "📱", title: "Digital Services", desc: "Online solutions for Mumbai" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Your Gateway to
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Mumbai
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-blue-100 font-light">
                  From local teas to luxury experiences — we connect you to authentic Mumbai
                </p>
                <p className="text-lg text-blue-200">
                  Professional services, local expertise, trusted guidance for every need
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Ready to Explore Mumbai?
                  </h3>
                  <p className="text-lg text-blue-200">
                    Join thousands of Mumbaikars who trust us for their daily needs
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                  <button
                    className="px-10 cursor-pointer py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                  >
                    Register Now
                  </button>
                  </Link>

                  <Link href="/inquirypg">
                  <button
                    className="px-10 cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                  >
                    Make Inquiry
                  </button>
                  </Link>
                </div>
              </div>

              {/* <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span className="text-blue-100">10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-blue-100">4.8 Rating</span>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{
                    backgroundImage: `url(${heroImages[currentSlide].src})`
                  }}
                ></div>
                <div className="absolute bottom-6 left-6 text-white z-20">
                  <h3 className="text-2xl font-bold">{heroImages[currentSlide].title}</h3>
                  <p className="text-blue-200">{heroImages[currentSlide].subtitle}</p>
                </div>
              </div>
              
              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 shadow-xl">
            <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Start Your <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Mumbai Journey</span>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Experience authentic Mumbai with our trusted local network
            </p>
            <div className="text-sm text-gray-500 italic">
              "From humble tapris to grand palaces — we know Mumbai like no one else"
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}