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
        
          <div className="m-40 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full hidden md:block"
              className="bg-transparent text-white px-4 py-2 text-sm font-medium"
            >
              Get Started
            </HoverBorderGradient>
            <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">


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

