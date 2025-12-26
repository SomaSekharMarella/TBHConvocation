import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GalaxyBackground() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const starsRef = useRef(null)
  const animationFrameRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetCameraPosition = useRef({ x: 0, y: 0, z: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup - very wide field of view for depth
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    )
    camera.position.z = 1000
    cameraRef.current = camera
    targetCameraPosition.current = { x: 0, y: 0, z: 1000 }

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Performance
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Cap pixel ratio
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Detect mobile for performance
    const isMobile = window.innerWidth < 768
    const starCount = isMobile ? 3000 : 8000 // Reduced for mobile

    // Create star field with depth layers
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    })

    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    // Create stars at different depths
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3

      // Random position in a sphere
      const radius = Math.random() * 2000 + 500 // Depth layers: 500 to 2500
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Depth-based opacity and size (far = faint, near = brighter)
      const depth = radius / 2500 // Normalize to 0-1
      const opacity = 0.3 + (1 - depth) * 0.4 // Far: 0.3, Near: 0.7
      const size = 0.3 + (1 - depth) * 0.7 // Far: 0.3, Near: 1.0

      // White/soft gray colors only
      const brightness = 0.7 + opacity * 0.3
      colors[i3] = brightness
      colors[i3 + 1] = brightness
      colors[i3 + 2] = brightness

      sizes[i] = size
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)
    starsRef.current = stars

    // Very slow camera movement - meditative drift
    const cameraSpeed = 0.0001
    let cameraAngle = 0

    // Mouse parallax - very subtle
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.01

      // Very slow camera orbital movement
      cameraAngle += cameraSpeed
      const orbitRadius = 50
      targetCameraPosition.current.x = Math.sin(cameraAngle) * orbitRadius
      targetCameraPosition.current.y = Math.cos(cameraAngle * 0.7) * orbitRadius * 0.5

      // Very slow zoom in/out
      const zoom = Math.sin(timeRef.current * 0.01) * 20
      targetCameraPosition.current.z = 1000 + zoom

      // Smooth camera interpolation (damping)
      camera.position.x += (targetCameraPosition.current.x - camera.position.x) * 0.02
      camera.position.y += (targetCameraPosition.current.y - camera.position.y) * 0.02
      camera.position.z += (targetCameraPosition.current.z - camera.position.z) * 0.02

      // Very subtle mouse parallax (max 1-2px effect)
      if (!isMobile) {
        camera.position.x += mouseRef.current.x * 0.5
        camera.position.y += mouseRef.current.y * 0.5
      }

      // Very slow star rotation for depth perception
      stars.rotation.y += 0.00005
      stars.rotation.x += 0.00003

      // Update camera look
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

