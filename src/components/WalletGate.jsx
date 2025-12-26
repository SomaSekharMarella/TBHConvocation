import { useState } from 'react'
import { motion } from 'framer-motion'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { fadeIn, scaleIn, blurToFocus, rotate3D, perspective3D } from '../animations/framerVariants'

const WalletGate = ({ onConnect, onEnter, isConnected, onDirectEnter }) => {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = () => {
    setIsConnecting(true)
    setTimeout(() => {
      if (onConnect) {
        onConnect()
      }
    }, 500)
  }

  const handleEnterStory = () => {
    if (isConnected && onEnter) {
      onEnter()
    }
  }

  const handleDirectEnter = () => {
    if (onDirectEnter) {
      onDirectEnter()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {/* Full Dark Background with Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.03),transparent_50%)]" />
      
      {/* Enhanced Graphics - Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Background Circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bg-circle-${i}`}
            className="absolute rounded-full border"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
              borderColor: i % 2 === 0 ? 'rgba(0, 255, 255, 0.05)' : 'rgba(139, 92, 246, 0.05)',
              left: `${10 + i * 25}%`,
              top: `${5 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Love Symbols (Hearts) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-2xl md:text-3xl"
            style={{
              left: `${10 + (i * 7.5)}%`,
              top: `${15 + (i % 4) * 20}%`,
              color: i % 3 === 0 ? '#ff6b9d' : i % 3 === 1 ? '#ff8fab' : '#ffa8c5',
              filter: 'drop-shadow(0 0 8px currentColor)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Animated Particles with Glow */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              background: i % 2 === 0 ? '#00ffff' : '#8b5cf6',
              boxShadow: `0 0 ${6 + Math.random() * 6}px ${i % 2 === 0 ? '#00ffff' : '#8b5cf6'}`,
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
              x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : 0,
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: 30 + i * 8,
              height: 30 + i * 8,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? 'rgba(0, 255, 255, 0.08)' : 'rgba(139, 92, 246, 0.08)'}, transparent)`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '25%' : '0%',
              left: `${12 + i * 10}%`,
              top: `${8 + i * 6}%`,
              rotate: 45,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [45, 90, 45],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: '1px',
              height: '150px',
              background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? 'rgba(0, 255, 255, 0.2)' : 'rgba(139, 92, 246, 0.2)'}, transparent)`,
              left: `${20 + i * 12}%`,
              top: `${10 + i * 10}%`,
              transformOrigin: 'top',
            }}
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.1, 0.3, 0.1],
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

      {/* Main Content - Mobile Optimized */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
        variants={perspective3D}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Love Symbol Header - Smaller on Mobile */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl sm:text-4xl md:text-5xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              ❤️
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-3 sm:mb-4 px-2 heading-cyan"
          variants={rotate3D}
          style={{ letterSpacing: '0.02em', lineHeight: '1.2' }}
        >
          Konni Journeys Scroll Cheyyalem.
        </motion.h1>
        
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold mb-4 sm:mb-6 px-2 heading-violet"
          variants={rotate3D}
          transition={{ delay: 0.2 }}
          style={{ letterSpacing: '0.02em', lineHeight: '1.3' }}
        >
          Unlock Cheyyali.
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-elegant px-2"
          variants={blurToFocus}
          transition={{ delay: 0.4 }}
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
            letterSpacing: '0.01em',
            lineHeight: '1.6',
          }}
        >
          Ee story chadavadaniki permission kaadhu…<br />
          <span className="text-pink-400 font-medium">Intent undali.</span>
        </motion.p>

        {/* Love Symbols around Button */}
        <motion.div
          variants={rotate3D}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div 
            className="flex items-center gap-2 mb-2"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl">💕</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">💕</span>
          </motion.div>

          <motion.div 
            className="transform-3d"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading'
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated')

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <div className="flex flex-col items-center gap-4">
                            <button
                              onClick={openConnectModal}
                              type="button"
                              className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-lg md:text-xl rounded-xl glow-box-violet border-2 border-pink-400/50 hover:scale-110 hover:border-pink-400 transition-all duration-300 shadow-2xl"
                              style={{
                                boxShadow: '0 0 30px rgba(255, 107, 157, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
                              }}
                            >
                              💝 Connect Wallet to Enter 💝
                            </button>
                            
                            <div className="flex items-center gap-3 my-2">
                              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1" style={{ width: '100px' }}></div>
                              <span className="text-gray-500 text-sm font-elegant">or</span>
                              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1" style={{ width: '100px' }}></div>
                            </div>

                            <button
                              onClick={handleDirectEnter}
                              type="button"
                              className="px-10 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white font-semibold text-base md:text-lg rounded-xl border-2 border-gray-600/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                              style={{
                                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                              }}
                            >
                              ✨ Continue Without Wallet ✨
                            </button>
                          </div>
                        )
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-lg"
                          >
                            Wrong network
                          </button>
                        )
                      }

                      return (
                        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-2 w-full sm:w-auto">
                            <button
                              onClick={openChainModal}
                              type="button"
                              className="px-4 sm:px-6 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg active:border-purple-500 transition-colors backdrop-blur-sm text-sm sm:text-base touch-manipulation"
                              style={{ minHeight: '44px' }}
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 18,
                                    height: 18,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 6,
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 18, height: 18 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button
                              onClick={openAccountModal}
                              type="button"
                              className="px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg active:shadow-lg transition-all text-sm sm:text-base touch-manipulation"
                              style={{ minHeight: '44px' }}
                            >
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                          
                          <button
                            onClick={handleEnterStory}
                            type="button"
                            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl glow-box-violet border-2 border-pink-400/50 active:scale-95 hover:scale-110 active:border-pink-400 transition-all duration-300 shadow-2xl touch-manipulation"
                            style={{
                              boxShadow: '0 0 30px rgba(255, 107, 157, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
                              minHeight: '48px',
                            }}
                          >
                            ❤️ Enter Story ❤️
                          </button>
                        </div>
                      )
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2 mt-2"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <span className="text-2xl">💕</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">💕</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default WalletGate
