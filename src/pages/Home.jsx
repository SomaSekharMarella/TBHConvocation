import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAccount } from 'wagmi'
import WalletGate from '../components/WalletGate'
import StorySection from '../components/StorySection'
import SubtleBackground from '../components/SubtleBackground'
import { storyContent } from '../content/story'
import { 
  heroAnimation, 
  slowFadeIn, 
  endAnimation 
} from '../animations/emotionalAnimations'

const Home = () => {
  const { isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(true)
  const [showStory, setShowStory] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleEnterStory = () => {
    setShowStory(true)
  }

  const handleDirectEnter = () => {
    setShowStory(true)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
        <motion.div
          className="w-8 h-8 border-2 rounded-full"
          style={{ 
            borderColor: 'rgba(74, 158, 255, 0.3)',
            borderTopColor: '#4a9eff'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }

  if (!showStory) {
    return (
      <WalletGate 
        onEnter={handleEnterStory} 
        isConnected={isConnected} 
        onDirectEnter={handleDirectEnter} 
      />
    )
  }

  const sections = storyContent.sections

  return (
    <motion.div
      className="relative w-full"
      initial="initial"
      animate="animate"
      variants={slowFadeIn}
    >
      {/* Subtle CSS-based Background */}
      <SubtleBackground />

      {/* Hero Section - Full viewport, centered - Matching WalletGate style */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-6 relative z-10"
        variants={heroAnimation}
      >
        <div className="max-w-4xl mx-auto text-center w-full px-6">
          <motion.h1
            className="text-hero font-heading font-semibold mb-6 no-word-break"
            style={{ 
              letterSpacing: '-0.02em', 
              lineHeight: '1.2',
              color: '#4a9eff'
            }}
          >
            {storyContent.landing.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-text-secondary line-poetic"
            variants={heroAnimation}
            transition={{ delay: 0.3 }}
          >
            {storyContent.landing.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Story Flow Sections - Organized with proper spacing */}
      <div className="relative z-10 w-full">
        {sections.map((section, index) => (
          <StorySection
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>

      {/* End Section - Calm closure */}
      <motion.section
        className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 py-32 relative z-10"
        variants={endAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-text-secondary line-poetic spacing-letter"
            variants={endAnimation}
          >
            These moments will remain.
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home
