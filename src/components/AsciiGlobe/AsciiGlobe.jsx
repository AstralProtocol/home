import React, { useRef, useEffect, useCallback, useState } from "react"
import "./AsciiGlobe.scss"

// Simplified world coastline data (longitude, latitude pairs)
// This is a highly simplified version of world continents for ASCII rendering
const WORLD_COORDINATES = {
  // North America
  northAmerica: [
    [-168, 65], [-166, 60], [-140, 60], [-130, 55], [-125, 48], [-124, 40],
    [-117, 32], [-105, 25], [-97, 25], [-97, 28], [-82, 25], [-80, 30],
    [-75, 35], [-70, 42], [-68, 44], [-66, 45], [-64, 47], [-52, 47],
    [-55, 52], [-60, 55], [-65, 60], [-75, 65], [-85, 67], [-95, 68],
    [-110, 70], [-130, 70], [-145, 70], [-165, 68], [-168, 65]
  ],
  // South America
  southAmerica: [
    [-80, 10], [-75, 5], [-70, 5], [-60, 5], [-50, 0], [-45, -5], [-35, -5],
    [-35, -10], [-38, -15], [-43, -23], [-48, -28], [-53, -33], [-58, -38],
    [-63, -42], [-65, -46], [-68, -50], [-70, -53], [-75, -50], [-75, -45],
    [-72, -40], [-72, -35], [-71, -30], [-70, -20], [-75, -15], [-77, -10],
    [-80, -5], [-80, 0], [-78, 5], [-80, 10]
  ],
  // Europe
  europe: [
    [-10, 36], [-5, 36], [0, 38], [5, 43], [3, 46], [-5, 48], [-10, 52],
    [-5, 55], [0, 51], [5, 52], [8, 54], [12, 54], [15, 55], [20, 55],
    [25, 55], [28, 56], [30, 60], [28, 64], [25, 68], [20, 70], [15, 70],
    [10, 65], [5, 60], [0, 58], [-5, 58], [-10, 55], [-10, 50], [-10, 45],
    [-10, 40], [-10, 36]
  ],
  // Africa
  africa: [
    [-17, 15], [-15, 20], [-17, 25], [-13, 28], [-5, 35], [0, 37], [10, 37],
    [15, 32], [25, 32], [32, 30], [35, 25], [40, 15], [50, 12], [52, 5],
    [45, 0], [42, -5], [40, -15], [35, -25], [30, -30], [25, -34], [20, -35],
    [15, -30], [12, -20], [15, -10], [10, 0], [5, 5], [0, 5], [-5, 5],
    [-10, 5], [-15, 10], [-17, 15]
  ],
  // Asia
  asia: [
    [30, 40], [35, 42], [40, 43], [50, 45], [60, 50], [70, 55], [80, 55],
    [90, 50], [100, 55], [110, 55], [120, 55], [130, 50], [135, 45], [140, 45],
    [145, 50], [160, 60], [170, 65], [180, 68], [180, 70], [170, 72], [150, 72],
    [140, 70], [120, 72], [100, 72], [80, 70], [70, 72], [60, 68], [50, 55],
    [40, 45], [35, 42], [30, 40]
  ],
  // Australia
  australia: [
    [115, -20], [120, -18], [130, -12], [140, -12], [145, -15], [150, -22],
    [153, -28], [150, -35], [145, -38], [138, -35], [130, -32], [122, -33],
    [115, -30], [113, -25], [115, -20]
  ],
  // Additional landmasses - simplified
  greenland: [
    [-45, 60], [-40, 65], [-35, 70], [-25, 75], [-20, 80], [-30, 82],
    [-45, 82], [-55, 78], [-60, 75], [-55, 70], [-50, 65], [-45, 60]
  ],
  // Japan (simplified)
  japan: [
    [130, 32], [132, 34], [135, 35], [138, 36], [140, 38], [141, 42],
    [145, 44], [145, 42], [142, 38], [139, 35], [136, 33], [132, 31], [130, 32]
  ],
  // UK/Ireland
  uk: [
    [-10, 52], [-6, 54], [-5, 58], [-3, 59], [0, 58], [2, 55], [0, 51],
    [-5, 50], [-6, 51], [-10, 52]
  ],
  // Indonesia (very simplified)
  indonesia: [
    [95, 5], [100, 2], [105, -5], [115, -8], [120, -8], [130, -5],
    [140, -5], [140, -8], [130, -10], [120, -10], [110, -8], [105, -6],
    [100, 0], [95, 5]
  ],
  // New Zealand
  newZealand: [
    [166, -35], [170, -35], [175, -37], [178, -40], [175, -45], [170, -46],
    [168, -44], [166, -40], [166, -35]
  ]
}

const AsciiGlobe = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const rotationRef = useRef(0)
  const [isInitialized, setIsInitialized] = useState(false)

  // Configuration
  const config = {
    rotationSpeed: 0.002,
    attractionRadius: 120,
    attractionStrength: 4,
    springStrength: 0.08,
    damping: 0.85,
    landChars: ["#", "@", "%", "&", "*", "+", "=", "~", "^", "$", "!", "?"],
    oceanChar: "·",
    fontSize: 11,
    globeScale: 0.42,  // Bigger globe (was 0.38)
    landColor: "rgba(255, 199, 147, ",  // $primary-main - peach/orange
    oceanColor: "rgba(83, 147, 254, ",   // $blue-500 - blue for ocean
    gridDensity: 3.2,  // Slightly denser for bigger globe
  }

  // Convert lat/lng to spherical coordinates (theta, phi)
  const latLngToSpherical = useCallback((lng, lat) => {
    const phi = (90 - lat) * (Math.PI / 180)  // Convert to radians, 0 at north pole
    const theta = (lng + 180) * (Math.PI / 180)  // Convert to radians
    return { theta, phi }
  }, [])

  // Check if a point is inside a polygon using ray casting
  const pointInPolygon = useCallback((lng, lat, polygon) => {
    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i]
      const [xj, yj] = polygon[j]

      if (((yi > lat) !== (yj > lat)) &&
          (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
        inside = !inside
      }
    }
    return inside
  }, [])

  // Check if point is on land
  const isLand = useCallback((lng, lat) => {
    for (const continent of Object.values(WORLD_COORDINATES)) {
      if (pointInPolygon(lng, lat, continent)) {
        return true
      }
    }
    return false
  }, [pointInPolygon])

  // Generate points covering the globe with land detection
  const generateWorldPoints = useCallback(() => {
    const points = []
    const density = config.gridDensity

    // Generate a grid of points across the globe
    for (let lat = -85; lat <= 85; lat += density) {
      // Adjust longitude density based on latitude (fewer points near poles)
      const latRadians = lat * Math.PI / 180
      const lngStep = density / Math.cos(latRadians)

      for (let lng = -180; lng < 180; lng += Math.max(lngStep, density)) {
        const { theta, phi } = latLngToSpherical(lng, lat)
        const onLand = isLand(lng, lat)

        // Pick a random land character for variety
        const landChar = config.landChars[Math.floor(Math.random() * config.landChars.length)]

        points.push({
          theta,
          phi,
          lng,
          lat,
          isLand: onLand,
          x: 0,
          y: 0,
          targetX: 0,
          targetY: 0,
          vx: 0,
          vy: 0,
          z: 0,
          char: onLand ? landChar : config.oceanChar,
        })
      }
    }

    return points
  }, [latLngToSpherical, isLand, config.gridDensity, config.landChars, config.oceanChar])

  // Initialize particles
  useEffect(() => {
    particlesRef.current = generateWorldPoints()
    setIsInitialized(true)
  }, [generateWorldPoints])

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
    if (!isInitialized) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    let currentScale = 1

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const scale = Math.min(rect.width, rect.height) * config.globeScale
      currentScale = scale

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update rotation (rotate around Y axis)
      rotationRef.current += config.rotationSpeed
      const rotation = rotationRef.current

      // Update particles
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Calculate 3D position with rotation around Y axis
        const cosRot = Math.cos(rotation)
        const sinRot = Math.sin(rotation)

        // Convert spherical to Cartesian
        const x0 = Math.sin(p.phi) * Math.cos(p.theta)
        const y0 = Math.cos(p.phi)
        const z0 = Math.sin(p.phi) * Math.sin(p.theta)

        // Rotate around Y axis
        const x3d = x0 * cosRot - z0 * sinRot
        const y3d = y0
        const z3d = x0 * sinRot + z0 * cosRot

        // Project to 2D (orthographic projection)
        p.targetX = centerX + x3d * scale
        p.targetY = centerY - y3d * scale  // Flip Y for screen coordinates
        p.z = z3d

        // Initialize position if first frame
        if (p.x === 0 && p.y === 0) {
          p.x = p.targetX
          p.y = p.targetY
        }

        // Calculate distance from mouse
        const dx = mouse.x - p.x  // Reversed: toward mouse
        const dy = mouse.y - p.y  // Reversed: toward mouse
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Apply attraction force if within radius (pull toward mouse)
        if (dist < config.attractionRadius && dist > 0) {
          const force = (config.attractionRadius - dist) / config.attractionRadius
          const forceX = (dx / dist) * force * config.attractionStrength
          const forceY = (dy / dist) * force * config.attractionStrength
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
      }

      // Sort by z-depth for proper rendering (back to front)
      const sortedParticles = [...particles].sort((a, b) => a.z - b.z)

      // Draw particles
      ctx.font = `${config.fontSize}px "JetBrains Mono", "Fira Code", monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      for (const p of sortedParticles) {
        // Only render front-facing points
        if (p.z < -0.1) continue

        // Calculate alpha based on depth
        const normalizedZ = (p.z + 1) / 2  // -1 to 1 -> 0 to 1
        const alpha = 0.15 + normalizedZ * 0.85

        // Add extra glow for repelled particles
        const distFromTarget = Math.sqrt(
          Math.pow(p.x - p.targetX, 2) + Math.pow(p.y - p.targetY, 2)
        )
        const repelGlow = Math.min(1, distFromTarget / 40)

        // Choose color based on land/ocean
        const baseColor = p.isLand ? config.landColor : config.oceanColor

        if (repelGlow > 0.1) {
          // Draw glow for repelled particles
          ctx.fillStyle = `rgba(207, 156, 255, ${repelGlow * 0.7})`  // Pink glow
          ctx.fillText(p.char, p.x, p.y)
        }

        ctx.fillStyle = `${baseColor}${alpha.toFixed(2)})`
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
  }, [config, isInitialized])

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
