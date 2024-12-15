import React from 'react'
import Header from "@/sections/Header"
import SpaceShowcase from '@/components/SpaceShowcase'
import { UseCasesCarousel } from '@/components/UseCasesCarousel'
import Footer from "@/sections/Footer"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <SpaceShowcase />
        <section id="use-cases" className="overflow-hidden">
          <UseCasesCarousel />
        </section>
        
          {/* <News /> */}
          {/* <WorldMap /> */}
    
        <Footer />
      </div>
    </main>
  )
}
