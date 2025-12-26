// Slow, emotional animations for the tribute website

// Fade in slowly
export const slowFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 2,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// Fade in with vertical translate (slow)
export const fadeInUpSlow = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1.5,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// Blur to sharp transition
export const blurToSharp = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
  },
  transition: {
    duration: 2,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// Text revealing line by line
export const staggerTextSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

// Word fade in (for line-by-line reveal)
export const wordFadeInSlow = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// Hero section animation
export const heroAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 2,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// Section container
export const sectionContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Silence section (minimal animation)
export const silenceAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 3,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

// End section (calm, grounded)
export const endAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 2.5,
    ease: [0.6, 0.01, 0.05, 0.95],
  },
}

