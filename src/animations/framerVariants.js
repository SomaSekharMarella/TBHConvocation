export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const staggerText = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const wordFadeIn = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
  transition: {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  transition: {
    duration: 0.8,
    ease: [0.34, 1.56, 0.64, 1],
  },
}

export const blurToFocus = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  transition: {
    duration: 1.2,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const slideInFromRight = {
  initial: {
    opacity: 0,
    x: 100,
    rotateY: 15,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
}

export const slideInFromLeft = {
  initial: {
    opacity: 0,
    x: -100,
    rotateY: -15,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
}

// Advanced 3D animations
export const rotate3D = {
  initial: {
    opacity: 0,
    rotateX: -90,
    rotateY: 15,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  transition: {
    duration: 1,
    ease: [0.34, 1.56, 0.64, 1],
  },
}

export const float3D = {
  animate: {
    y: [0, -20, 0],
    rotateX: [0, 5, 0],
    rotateY: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export const perspective3D = {
  initial: {
    opacity: 0,
    rotateX: 45,
    rotateY: -15,
    scale: 0.7,
    z: -200,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
  },
  transition: {
    duration: 1.2,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const image3D = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: -25,
    rotateX: 10,
    z: -100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    z: 0,
  },
  transition: {
    duration: 1,
    ease: [0.34, 1.56, 0.64, 1],
  },
}

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 255, 255, 0.3)",
      "0 0 40px rgba(0, 255, 255, 0.5)",
      "0 0 20px rgba(0, 255, 255, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export const textReveal3D = {
  initial: {
    opacity: 0,
    rotateX: 90,
    y: 50,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const section3D = {
  initial: {
    opacity: 0,
    rotateX: 10,
    y: 100,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
  },
  transition: {
    duration: 1,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}
