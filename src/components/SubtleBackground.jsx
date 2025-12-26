import GalaxyBackground from './GalaxyBackground'

// Film Grain / Noise Overlay - ALWAYS ON
function FilmGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        mixBlendMode: 'overlay',
      }}
    />
  )
}

// Slow Gradient Breathing - Optional dark gradient shift
function GradientBreathing() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(10, 10, 10, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(13, 13, 13, 0.6) 0%, transparent 50%)
        `,
        animation: 'gradientBreath 45s ease-in-out infinite',
        mixBlendMode: 'normal',
      }}
    />
  )
}

// Mouse-based Parallax Drift - Very subtle
function ParallaxDrift({ children }) {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Smooth interpolation with damping
    const updateParallax = () => {
      if (containerRef.current) {
        // Very slow interpolation (damping)
        targetRef.current.x += (mouseRef.current.x * 2 - targetRef.current.x) * 0.02
        targetRef.current.y += (mouseRef.current.y * 2 - targetRef.current.y) * 0.02

        // Apply transform - max 2px movement
        containerRef.current.style.transform = `translate(${targetRef.current.x}px, ${targetRef.current.y}px)`
      }
      requestAnimationFrame(updateParallax)
    }

    const animationId = requestAnimationFrame(updateParallax)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ transition: 'none' }}>
      {children}
    </div>
  )
}

export default function SubtleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Galaxy Background - Cinematic star field */}
      <GalaxyBackground />

      {/* Dark overlay for text readability */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.3) 100%)',
        }}
      />

      {/* Film Grain - ALWAYS ON, highest priority */}
      <FilmGrain />

      {/* Gradient Breathing - Optional subtle dark gradient */}
      <GradientBreathing />

      {/* CSS Animation for gradient breathing */}
      <style>{`
        @keyframes gradientBreath {
          0%, 100% {
            background: radial-gradient(circle at 20% 30%, rgba(10, 10, 10, 0.8) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(13, 13, 13, 0.6) 0%, transparent 50%);
          }
          50% {
            background: radial-gradient(circle at 80% 70%, rgba(10, 10, 10, 0.8) 0%, transparent 50%),
                        radial-gradient(circle at 20% 30%, rgba(13, 13, 13, 0.6) 0%, transparent 50%);
          }
        }
      `}</style>
    </div>
  )
}
