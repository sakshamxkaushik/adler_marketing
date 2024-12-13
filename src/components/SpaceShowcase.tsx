'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  "Dream Home",
  "All Spaces",
  "Influencer",
  "Memorial",
  "Winter",
  "APT"
]

const spaces = [
  { id: 1, name: "Football Haven by kingmen_1", category: "Dream Home", image: "/images/spaces/641346505713741832.png", url: "https://www.adler3d.com/posts/641346505713741832" },
  { id: 2, name: "seyoung's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/641346505713741833" },
  { id: 3, name: "anas3d's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/641630800005132370" },
  { id: 4, name: "sandrakp's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/642597830074134759" },
  { id: 5, name: "beguel's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/635825324814335831" },
  { id: 6, name: "armaan's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/635856474597326683" },
  { id: 7, name: "riazraz's cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/634700069924339440" },
  { id: 8, name: "souvik's cherished space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/639378679323000742" },
  { id: 9, name: "Artistx' cherished space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/447286214026950411" },
  { id: 10, name: "Shelly's cherished space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/644214723134452503" },
  { id: 11, name: "hellfigure's celebrity space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/645230894872884257" },
  { id: 12, name: "ray007's celebrity space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/644237526428644144" },
  { id: 13, name: "King's Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/643790918784217602" },
  { id: 14, name: "Pacino's Realm", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/644222033126847263" },
  { id: 15, name: "Scarlet Johannson", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/645213163809240092" },
  { id: 16, name: "Robert J Downey", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/644937812818359244" },
  { id: 17, name: "joshua esuko", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646274702465135845" },
  { id: 18, name: "mermaidscales", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/648260359148369621" },
  { id: 19, name: "Jimin BE Album", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/651800314210515118" },
  { id: 20, name: "Robin Sharma", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/649095951922853738" },
  { id: 21, name: "Favourite influencer", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/649607739386984527" },
  { id: 22, name: "Champions Sanctuary", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646742449422693778" },
  { id: 23, name: "General:The purrfect Legend", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646275122306577638" },
  { id: 24, name: "Memory of Disco", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646659842739631484" },
  { id: 25, name: "Lovely Bunny", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/647775989694297692" },
  { id: 26, name: "Heath Ledger", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/648281141761111772" },
  { id: 27, name: "Olivee", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/648631898762999582" },
  { id: 28, name: "Oscar's Memorial space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646395820509328693" },
  { id: 29, name: "Paul Walker", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/646660744368190845" },
  { id: 30, name: "Starlit", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/647080641816524285" },
  { id: 31, name: "John of Arc", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/647419093598697003" },
  { id: 32, name: "Winter Evening", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/651435948042713234" },
  { id: 33, name: "Royal", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/651776602266499239" },
  { id: 34, name: "Winter is coming", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/652998251112397082" },
  { id: 35, name: "Cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/651772056643401894" },
  { id: 36, name: "Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/653193138134939936" },
  { id: 37, name: "Cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/652893426206996744" },
  { id: 38, name: "Cherished Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/652490328091228389" },
  { id: 39, name: "Interior Space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/652404589613643995" },
  { id: 40, name: "APT Inspired 3d space", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/653915616025082201" },
  { id: 41, name: "APT Challenge", category: "Dream Home", image: "/placeholder.svg?height=200&width=300", url: "https://www.adler3d.com/posts/653943445123070307" }
]

const ITEMS_PER_PAGE = 12

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Dream Home")
  const [autoSwitch, setAutoSwitch] = useState<boolean>(false)
  const [lastInteraction, setLastInteraction] = useState<number>(Date.now())
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleUserInteraction = useCallback(() => {
    setLastInteraction(Date.now())
    setAutoSwitch(false)
  }, [])

  useEffect(() => {
    const interactionTimer = setInterval(() => {
      if (Date.now() - lastInteraction > 10000) {
        setAutoSwitch(true)
      }
    }, 1000)

    return () => clearInterval(interactionTimer)
  }, [lastInteraction])

  useEffect(() => {
    if (autoSwitch) {
      const switchInterval = setInterval(() => {
        setSelectedCategory((prevCategory) => {
          const currentIndex = categories.indexOf(prevCategory)
          const nextIndex = (currentIndex + 1) % categories.length
          return categories[nextIndex]
        })
        setCurrentPage(1)
      }, 7000)

      return () => clearInterval(switchInterval)
    }
  }, [autoSwitch])

  const filteredSpaces = selectedCategory === "All Spaces" 
    ? spaces 
    : spaces.filter(space => space.category === selectedCategory)

  const totalPages = Math.ceil(filteredSpaces.length / ITEMS_PER_PAGE)
  const paginatedSpaces = filteredSpaces.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <main className="min-h-screen bg-black text-white p-8 font-ubuntu">
      <h1 className="text-4xl font-bold mb-12 text-center">3D Space Showcase</h1>
      
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
              handleUserInteraction()
            }}
            className={`px-4 py-2 border border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black ${
              selectedCategory === category ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {paginatedSpaces.map((space) => (
          <Link 
            href={space.url} 
            key={space.id} 
            className="block" 
            onClick={handleUserInteraction}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              <div className="relative h-48">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{space.name}</h2>
                <p className="text-sm text-gray-400">{space.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </main>
  )
}

