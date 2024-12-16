'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function Header() {
  return (
    <header className="bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Adler 3D Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
        
          <div className="flex items-center">
            <Link
              href="https://www.adler3d.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <HoverBorderGradient
                containerClassName="rounded-full overflow-hidden"
                className="bg-gradient-to-r from-pink-600 to-black-500 text-white px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
              </HoverBorderGradient>
            </Link>
            <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-black-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

