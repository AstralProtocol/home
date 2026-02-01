import React, { useRef, useEffect, useCallback } from "react"
import "./AsciiGlobe.scss"

const AsciiGlobe = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const rotationRef = useRef(0)

  // Configuration
  const config = {
    // Globe settings
    radius: 12,
    numPoints: 800,
    rotationSpeed: 0.003,

    // Physics settings
    repulsionRadius: 120,
    repulsionStrength: 8,
    springStrength: 0.08,
    damping: 0.85,

    // Visual settings
    chars: ".:-=+*#%@",
    fontSize: 14,
    color: "rgba(255, 199, 147, ",  // $primary-main with alpha
    backgroundColor: "transparent",
  }

  // Generate points on a sphere using Fibonacci spiral
  const generateSpherePoints = useCallback((numPoints, radius) => {
    const points = []
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numPoints; i++) {
      const theta = 2 * Math.PI * i / goldenRatio
      const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints)

      points.push({
        // Original spherical coordinates
        theta,
        phi,
        radius,

        // Current position (will be modified by physics)
        x: 0,
        y: 0,

        // Target position (where it should be)
        targetX: 0,
        targetY: 0,

        // Velocity for physics
        vx: 0,
        vy: 0,

        // Depth for shading
        z: 0,

        // Character to display
        char: ".",
      })
    }

    return points
  }, [])

  // Initialize particles
  useEffect(() => {
    particlesRef.current = generateSpherePoints(config.numPoints, config.radius)
  }, [generateSpherePoints, config.numPoints, config.radius])

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 }
  }, [])

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const scale = Math.min(rect.width, rect.height) * 0.35

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update rotation
      rotationRef.current += config.rotationSpeed
      const rotation = rotationRef.current

      // Update particles
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Calculate 3D position with rotation
        const x3d = p.radius * Math.sin(p.phi) * Math.cos(p.theta + rotation)
        const y3d = p.radius * Math.cos(p.phi)
        const z3d = p.radius * Math.sin(p.phi) * Math.sin(p.theta + rotation)

        // Project to 2D (simple orthographic projection)
        p.targetX = centerX + x3d * scale / p.radius
        p.targetY = centerY + y3d * scale / p.radius
        p.z = z3d

        // Initialize position if first frame
        if (p.x === 0 && p.y === 0) {
          p.x = p.targetX
          p.y = p.targetY
        }

        // Calculate distance from mouse
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distSq = dx * dx + dy * dy
        const dist = Math.sqrt(distSq)

        // Apply repulsion force if within radius
        if (dist < config.repulsionRadius && dist > 0) {
          const force = (config.repulsionRadius - dist) / config.repulsionRadius
          const forceX = (dx / dist) * force * config.repulsionStrength
          const forceY = (dy / dist) * force * config.repulsionStrength
          p.vx += forceX
          p.vy += forceY
        }

        // Apply spring force back to target
        const springDx = p.targetX - p.x
        const springDy = p.targetY - p.y
        p.vx += springDx * config.springStrength
        p.vy += springDy * config.springStrength

        // Apply damping
        p.vx *= config.damping
        p.vy *= config.damping

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Determine character based on depth (z position)
        // Front of globe (z > 0) uses brighter characters
        const normalizedZ = (z3d + p.radius) / (2 * p.radius)  // 0 to 1
        const charIndex = Math.floor(normalizedZ * (config.chars.length - 1))
        p.char = config.chars[charIndex]
      }

      // Sort by z-depth for proper rendering (back to front)
      const sortedParticles = [...particles].sort((a, b) => a.z - b.z)

      // Draw particles
      ctx.font = `${config.fontSize}px "JetBrains Mono", "Fira Code", monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      for (const p of sortedParticles) {
        // Only render front-facing points (z > 0 ish)
        if (p.z < -p.radius * 0.2) continue

        // Calculate alpha based on depth
        const normalizedZ = (p.z + p.radius) / (2 * p.radius)
        const alpha = 0.2 + normalizedZ * 0.8

        // Add extra glow for repelled particles
        const distFromTarget = Math.sqrt(
          Math.pow(p.x - p.targetX, 2) + Math.pow(p.y - p.targetY, 2)
        )
        const repelGlow = Math.min(1, distFromTarget / 50)

        if (repelGlow > 0.1) {
          // Draw glow for repelled particles
          ctx.fillStyle = `rgba(207, 156, 255, ${repelGlow * 0.6})`  // $pink-400
          ctx.fillText(p.char, p.x, p.y)
        }

        ctx.fillStyle = `${config.color}${alpha.toFixed(2)})`
        ctx.fillText(p.char, p.x, p.y)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [config])

  return (
    <div
      ref={containerRef}
      className="AsciiGlobe"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="AsciiGlobe__canvas" />
    </div>
  )
}

export default AsciiGlobe
