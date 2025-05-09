"use client"

// Under Development Functionality
// Not in Use

import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

type LenisWrapperProps = {
  children: ReactNode
}

const LenisWrapper = ({ children }: LenisWrapperProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default LenisWrapper
