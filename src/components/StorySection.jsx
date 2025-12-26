import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  slowFadeIn, 
  fadeInUpSlow, 
  blurToSharp, 
  staggerTextSlow, 
  wordFadeInSlow 
} from '../animations/emotionalAnimations'

const StorySection = ({ section, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

  // Check if this is a silence section (very little text)
  const isSilence = section.content.length <= 2 && section.content[0]?.length < 50

  // Render text with word-by-word animation
  const renderAnimatedText = (text) => {
    if (!text) return null
    
    const words = text.split(' ')
    return words.map((word, wordIndex) => (
      <motion.span
        key={wordIndex}
        variants={wordFadeInSlow}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))
  }

  // Extract emoji and text from title
  const parseTitle = (title) => {
    const emojiMatch = title.match(/^(\p{Emoji}+)\s*(.+)$/u)
    if (emojiMatch) {
      return { emoji: emojiMatch[1], text: emojiMatch[2] }
    }
    return { emoji: null, text: title }
  }

  const { emoji, text } = parseTitle(section.title)

  // Silence section - minimal design
  if (isSilence) {
    return (
      <motion.section
        ref={ref}
        className="section-silence min-h-[60vh] flex items-center justify-center px-6 md:px-12"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={slowFadeIn}
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUpSlow}
        >
          {section.content.map((line, lineIndex) => (
            <motion.p
              key={lineIndex}
              className="text-2xl md:text-3xl text-text-primary line-poetic spacing-letter"
              variants={wordFadeInSlow}
            >
              {renderAnimatedText(line)}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>
    )
  }

  // Regular story section
  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 py-24 md:py-32"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerTextSlow}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title - Typography focused */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={blurToSharp}
        >
          {emoji && (
            <motion.span
              className="text-4xl md:text-5xl mb-6 block text-center"
              variants={fadeInUpSlow}
            >
              {emoji}
            </motion.span>
          )}
          <motion.h2
            className={`text-section md:text-display font-heading font-semibold text-center mb-12 md:mb-16 text-glow-focus ${
              isInView ? 'active' : ''
            }`}
            variants={fadeInUpSlow}
            style={{ 
              letterSpacing: '-0.01em', 
              lineHeight: '1.2',
              color: '#4a9eff'
            }}
          >
            {text}
          </motion.h2>
        </motion.div>

        {/* Image - minimal styling */}
        {section.image && (
          <motion.div
            className="mb-16 md:mb-20 max-w-2xl mx-auto"
            variants={blurToSharp}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto rounded-sm opacity-90"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </motion.div>
        )}

        {/* Content - Typography focused, letter-like */}
        <motion.div
          className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-text-secondary line-poetic"
          variants={staggerTextSlow}
        >
          {section.content.map((line, lineIndex) => {
            if (line === '') {
              return <div key={lineIndex} className="h-8" />
            }

            // Special styling for quotes
            const isQuote = line.startsWith('"') || line.startsWith("'")
            
            return (
              <motion.p
                key={lineIndex}
                className={`${
                  isQuote 
                    ? 'text-text-primary text-xl md:text-2xl italic text-center' 
                    : ''
                }`}
                variants={wordFadeInSlow}
                style={{ lineHeight: '1.8' }}
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
