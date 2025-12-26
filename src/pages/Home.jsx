import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAccount } from 'wagmi'
import WalletGate from '../components/WalletGate'
import StorySection from '../components/StorySection'
import { storyContent } from '../content/story'
import { fadeIn } from '../animations/framerVariants'

const Home = () => {
  const { isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(true)
  const [showStory, setShowStory] = useState(false)

  useEffect(() => {
    // Small delay for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Reset showStory on page refresh - always show wallet gate first
  useEffect(() => {
    setShowStory(false)
  }, [])

  const handleEnterStory = () => {
    // Works for both wallet-connected and direct entry
    setShowStory(true)
  }

  const handleDirectEnter = () => {
    // Direct entry without wallet - always works
    setShowStory(true)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-bg">
        <motion.div
          className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }

  // Show wallet gate if not connected OR if connected but story not shown yet
  if (!showStory) {
    return <WalletGate onEnter={handleEnterStory} isConnected={isConnected} onDirectEnter={handleDirectEnter} />
  }

  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {/* Background gradient overlay */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg pointer-events-none opacity-90" />
      
      {/* Enhanced Graphics - Geometric Shapes (Reduced on Mobile) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circles - Fewer on Mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border-2"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              borderColor: i % 2 === 0 ? 'rgba(0, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Geometric Shapes - Fewer on Mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: 40 + i * 10,
              height: 40 + i * 10,
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05))'
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
              rotate: 45,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [45, 90, 45],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: '2px',
              height: '200px',
              background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? 'rgba(0, 255, 255, 0.3)' : 'rgba(139, 92, 246, 0.3)'}, transparent)`,
              left: `${25 + i * 20}%`,
              top: `${10 + i * 15}%`,
              transformOrigin: 'top',
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Subtle animated particles background - Fewer on Mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 15 : 30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 2,
              height: 2 + Math.random() * 2,
              background: i % 2 === 0 ? '#00ffff' : '#8b5cf6',
              boxShadow: `0 0 ${4 + Math.random() * 4}px ${i % 2 === 0 ? '#00ffff' : '#8b5cf6'}`,
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
              x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : 0,
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Story Sections */}
      <div className="relative z-10">
        {storyContent.sections.map((section, index) => (
          <StorySection
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-neon-cyan text-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="mb-2">Scroll</span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home

