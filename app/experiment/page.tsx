'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = [
  {
    key: 'vitaltrack',
    backgroundColor: '#F0F4FF',
    backgroundImage: `
      radial-gradient(ellipse 60% 55% at 72% -10%, rgba(191, 204, 248, 0.70) 0%, transparent 70%),
      radial-gradient(ellipse 40% 35% at 88% 92%,  rgba(147, 197, 253, 0.45) 0%, transparent 65%),
      radial-gradient(ellipse 36% 30% at 45% 30%,  rgba(186, 230, 253, 0.40) 0%, transparent 60%)
    `,
    content: <VitalTrackSlide />,
  },
  {
    key: 'prepday',
    backgroundColor: '#111111',
    backgroundImage: `
      radial-gradient(ellipse 60% 50% at 72% -10%, rgba(240, 126, 32, 0.08) 0%, transparent 70%),
      radial-gradient(ellipse 40% 35% at 88% 92%,  rgba(240, 126, 32, 0.06) 0%, transparent 65%),
      radial-gradient(ellipse 28% 28% at 46% 30%,  rgba(255, 159, 74, 0.07) 0%, transparent 60%)
    `,
    content: <PrepDaySlide />,
  },
]

export default function ShowcaseLayout() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) setIndex(i => Math.min(i + 1, slides.length - 1))
      else              setIndex(i => Math.max(i - 1, 0))
    }
    window.addEventListener('wheel', onWheel)
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: slides[index].backgroundColor,
            backgroundImage: slides[index].backgroundImage,
          }}
        >
          {slides[index].content}
        </motion.div>
      </AnimatePresence>

      <NavDots index={index} total={slides.length} onChange={setIndex} />

    </div>
  )
}

function NavDots({ index, total, onChange }: { index: number; total: number; onChange: (i: number) => void }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8,
      zIndex: 10,
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          style={{
            width: i === index ? 24 : 8,
            height: 8,
            borderRadius: 99,
            background: i === index ? '#fff' : 'rgba(255,255,255,0.3)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'width 0.3s ease, background 0.3s ease',
          }}
        />
      ))}
    </div>
  )
}

function VitalTrackSlide() {
  return <div />
}

function PrepDaySlide() {
  return <div />
}