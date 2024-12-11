import React from 'react'
import CardsCarousel  from '@/app/CardsCarousel/page'
import CanvasReveal  from '@/app/CanvasReveal/CanvasReveal'
import { UseCasesCarousel } from '@/components/UseCasesCarousel'
import { Gallery } from '@/components/app-gallery-page'
import Card  from '@/components/cards-demo-1'
import  News  from '@/app/news/page'
import WorldMap from "@/components/world-map"
import Footer from "@/sections/Footer"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      
      <CanvasReveal />
      <CardsCarousel />
      <section id="gallery" className="bg-white">
        <Gallery />
      </section>
      <section id="use-cases" className="overflow-hidden">
        <UseCasesCarousel />
      </section>
      <Card />
      <section id="news" className="bg-white">
        <News />
        <WorldMap />
      </section>
      <Footer />
    </main>
  )
}