import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { staggerText, wordFadeIn, blurToFocus, image3D, textReveal3D, section3D, float3D } from '../animations/framerVariants'

const StorySection = ({ section, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Scroll-based transforms
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])
  
  // Mouse tracking for subtle 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Image 3D transforms - reduced angles to prevent clipping
  const imageRotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3])
  const imageRotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Extract emoji and text from title
  const parseTitle = (title) => {
    const emojiMatch = title.match(/^(\p{Emoji}+)\s*(.+)$/u)
    if (emojiMatch) {
      return { emoji: emojiMatch[1], text: emojiMatch[2] }
    }
    return { emoji: null, text: title }
  }

  // Split content into words for animation
  const renderAnimatedText = (text) => {
    if (!text) return null
    
    const words = text.split(' ')
    return words.map((word, wordIndex) => (
      <motion.span
        key={wordIndex}
        variants={wordFadeIn}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))
  }

  const { emoji, text } = parseTitle(section.title)

  return (
    <motion.section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20 ${
        section.isHighlight ? 'bg-dark-surface gradient-mesh' : 'bg-dark-bg'
      }`}
      style={{ 
        opacity, 
        y
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={section3D}
    >
      <div className="max-w-4xl mx-auto w-full relative px-2 sm:px-0">
        {/* Decorative Graphics for Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Corner Accents */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-neon-cyan opacity-30" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-neon-violet opacity-30" />
          </motion.div>

          {/* Floating Orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)'}, transparent)`,
                left: `${10 + i * 30}%`,
                top: `${15 + i * 25}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Section Title - Modern Style with Professional Emoji */}
        <motion.div
          className="flex flex-col items-center mb-8 md:mb-12"
          variants={textReveal3D}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {emoji && (
            <motion.div
              className={`emoji-icon mb-4 ${section.isHighlight ? 'emoji-cyan' : 'emoji-violet'}`}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {emoji}
            </motion.div>
          )}
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-center px-2 ${
              section.isHighlight 
                ? 'heading-cyan' 
                : 'heading-violet'
            }`}
            style={{ letterSpacing: '0.02em', lineHeight: '1.2' }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {text}
          </motion.h2>
        </motion.div>

        {/* Image with 3D effects - Fixed to prevent cutting */}
        {section.image && (
          <motion.div
            className="mb-12 image-container"
            variants={image3D}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="image-wrapper neon-border glow-box"
              style={{
                transformStyle: 'preserve-3d',
                rotateY: imageRotateY,
                rotateX: imageRotateX,
              }}
            >
              <img
                src={section.image}
                alt={section.title}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/20 via-transparent to-transparent pointer-events-none rounded-lg" />
            </motion.div>
          </motion.div>
        )}

        {/* Content - Mobile Optimized */}
        <motion.div
          className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 px-2 sm:px-0"
          variants={staggerText}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          style={{ lineHeight: '1.7' }}
        >
          {section.content.map((line, lineIndex) => {
            if (line === '') {
              return <div key={lineIndex} className="h-6" />
            }

            // Special styling for highlighted message
            if (section.isHighlight && (line.includes('Editing') || line.includes('editing'))) {
              return (
                <motion.div
                  key={lineIndex}
                  className="relative my-12"
                  variants={blurToFocus}
                >
                  <motion.div 
                    className="bg-dark-card border-l-4 border-neon-cyan p-6 rounded-r-lg glow-box"
                  >
                    <motion.p
                      className="text-2xl md:text-3xl font-semibold text-neon-cyan text-glow-intense"
                      variants={wordFadeIn}
                    >
                      "{line}"
                    </motion.p>
                  </motion.div>
                  <motion.div 
                    className="absolute -inset-1 bg-neon-cyan opacity-30 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )
            }

            // Regular text lines
            return (
              <motion.p
                key={lineIndex}
                className={`${
                  line.startsWith('"') || line.startsWith("'")
                    ? 'text-neon-violet italic'
                    : ''
                }`}
                variants={wordFadeIn}
              >
                {renderAnimatedText(line)}
              </motion.p>
            )
          })}
        </motion.div>

      </div>
    </motion.section>
  )
}

export default StorySection

