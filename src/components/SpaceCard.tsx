import { useState, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card1"

interface SpaceCardProps {
  title: string
  thumbnailUrl: string
  videoUrl: string
}

export function SpaceCard({ title, thumbnailUrl, videoUrl }: SpaceCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    videoRef.current?.pause()
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Card 
      className="relative overflow-hidden transition-all duration-300 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="p-0">
        {isHovering ? (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoUrl}
            muted
            loop
            playsInline
          />
        ) : (
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-lg font-bold">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

