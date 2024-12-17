'use client'

import React, { useState, useEffect } from 'react'

const MacOSCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', updatePosition)

    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <svg
      className={`macos-cursor ${isPointer ? 'cursor-pointer' : ''}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill="#FC2D7C"
        stroke="#FC2D7C"
      />
    </svg>
  )
}

export default MacOSCursor

