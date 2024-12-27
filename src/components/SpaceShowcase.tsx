'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SimpleCursor from '../components/SimpleCursor'

const categories = [
  "Dream Home",
  "Memorial Spaces",
  "Influencer",
  "APT & Winter"
]

const spaces = [
  { id: 1, name: "Football Haven by kingmen_1", category: "Dream Home", image: "/images/spaces/641346505713741832.png", url: "https://www.adler3d.com/posts/641346505713741832" },
  { id: 2, name: "seyoung's cherished Space", category: "Dream Home", image: "/images/spaces/641346505713741833.jpeg", url: "https://www.adler3d.com/posts/641346505713741833" },
  { id: 3, name: "anas3d's cherished Space", category: "Dream Home", image: "/images/spaces/641630800005132370.jpeg", url: "https://www.adler3d.com/posts/641630800005132370" },
  { id: 4, name: "sandrakp's cherished Space", category: "Dream Home", image: "/images/spaces/642597830074134759.png", url: "https://www.adler3d.com/posts/642597830074134759" },
  { id: 23, name: "General:The purrfect Legend", category: "Memorial Spaces", image: "/images/spaces/649095951922853738.jpeg", url: "https://www.adler3d.com/posts/646275122306577638" },
  { id: 24, name: "Memory of Disco", category: "Memorial Spaces", image: "/images/spaces/646659842739631484.png", url: "https://www.adler3d.com/posts/646659842739631484" },
  { id: 25, name: "Lovely Bunny", category: "Memorial Spaces", image: "/images/spaces/647775989694297692.png", url: "https://www.adler3d.com/posts/647775989694297692" },
  { id: 26, name: "Heath Ledger", category: "Memorial Spaces", image: "/images/spaces/648281141761111772.png", url: "https://www.adler3d.com/posts/648281141761111772" },
  { id: 10, name: "Shelly's cherished space", category: "Influencer", image: "/images/spaces/644214723134452503.png", url: "https://www.adler3d.com/posts/644214723134452503" },
  { id: 11, name: "hellfigure's celebrity space", category: "Influencer", image: "/images/spaces/645230894872884257.png", url: "https://www.adler3d.com/posts/645230894872884257" },
  { id: 12, name: "ray007's celebrity space", category: "Influencer", image: "/images/spaces/644237526428644144.png", url: "https://www.adler3d.com/posts/644237526428644144" },
  { id: 13, name: "King's Space", category: "Influencer", image: "/images/spaces/643790918784217602.png", url: "https://www.adler3d.com/posts/643790918784217602" },
  { id: 40, name: "APT Inspired 3d space", category: "APT & Winter", image: "/images/spaces/653915616025082201.jpeg", url: "https://www.adler3d.com/posts/653915616025082201" },
  { id: 41, name: "APT Challenge", category: "APT & Winter", image: "/images/spaces/653943445123070307.png", url: "https://www.adler3d.com/posts/653943445123070307" },
  { id: 32, name: "Winter Evening", category: "APT & Winter", image: "/images/spaces/651435948042713234.png", url: "https://www.adler3d.com/posts/651435948042713234" },
  { id: 33, name: "Royal", category: "APT & Winter", image: "/images/spaces/651776602266499239.png", url: "https://www.adler3d.com/posts/651776602266499239" },
]

const templates = [
  { name: "Museum", image: "/images/templates/museum.png" },
  { name: "Party Room", image: "/images/templates/party.png" },
  { name: "Home", image: "/images/templates/home.png" },  
  { name: "Blank", image: "/images/templates/blank.png" }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-ubuntu">
      <SimpleCursor />
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore and Create your own 3D World
      </motion.h1>  
      
      {/* Categories and Spaces */}
      {categories.map((category, categoryIndex) => (
        <motion.div 
          key={category} 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {spaces
              .filter(space => space.category === category)
              .slice(0, category === "APT & Winter" ? 4 : 4)
              .map((space, index) => (
                <motion.div
                  key={space.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.5, zIndex: 10 }}
                  className="w-full max-w-[250px]"
                >
                  <Link 
                    href={space.url} 
                    className="block" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(252,45,124,0.5)] transform">
                      <div className="relative w-full" style={{ paddingTop: '160%' }}>
                        <Image
                          src={space.image}
                          alt={space.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                          <h3 className="text-sm font-semibold truncate text-white">{space.name}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}

      {/* Templates */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Create Your Own Space
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {templates.map((template, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center w-full max-w-[250px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.5, zIndex: 10 }}
            >
              <div className="relative w-full mb-4 rounded-xl overflow-hidden transform" style={{ paddingTop: '160%' }}>
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <h3 className="text-sm font-semibold truncate text-white">{template.name}</h3>
                </div>
              </div>
              <Link 
                href="https://www.adler3d.com/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-[#FC2D7C] text-center"
              >
                Create your space using {template.name} Template
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

