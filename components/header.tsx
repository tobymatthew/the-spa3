'use client'

import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'

export function HeaderComponent() {
  return (
    <header className="w-full">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between bg-white">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L5 20L20 35L35 20L20 5Z" fill="#4A90E2"/>
            <path d="M20 12L12 20L20 28L28 20L20 12Z" fill="white"/>
          </svg>
          <span className="text-2xl font-semibold text-gray-800">REIA</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">HOME</Link>
          
          <Link href="/pages" className="text-gray-600 hover:text-gray-800">Products</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800">Services</Link>
          <Link href="/shop" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/landing" className="text-gray-600 hover:text-gray-800">Explore</Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="relative text-gray-600 hover:text-gray-800">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button> */}
          <button className="bg-main-primary text-white px-4 py-2 rounded hover:bg-blue-300 transition duration-300">
            BOOK NOW
          </button>
          <button className="md:hidden text-gray-600 hover:text-gray-800">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="relative bg-cover bg-center h-[600px] flex items-center" style={{backgroundImage: "url('/bgimage.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Beauty and SPA center
            </h1>
            <p className="text-lg md:text-xl max-w-md">
              Lorem ipsum dolor sit amet, ne nam ullum corrumpit, sea te voluptua quaestio praesent blandit patrioque fierent assum laudem.
            </p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition duration-300">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center space-x-2 mt-6">
        {[0, 1, 2, 3].map((_, index) => (
          <button key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`} />
        ))}
      </div> */}
    </header>
  )
}