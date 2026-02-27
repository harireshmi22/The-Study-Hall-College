import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const LazyImage = ({ src, alt, className = '', delay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  })

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true)
    }
  }, [inView, isInView])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && isInView && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse">
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-slate-300 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto bg-slate-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-responsive-xs text-slate-500">Image not available</p>
          </div>
        </div>
      )}
    </div>
  )
}

const LazyComponent = ({ children, fallback = null, delay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '100px'
  })

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true)
      // Simulate loading delay
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [inView, isInView, delay])

  return (
    <div ref={ref} className="w-full h-full">
      {isInView ? (
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {isLoaded ? children : fallback}
        </div>
      ) : (
        fallback || (
          <div className="w-full h-full min-h-[200px] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse rounded-lg" />
        )
      )}
    </div>
  )
}

const PerformanceMonitor = ({ children }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  })

  useEffect(() => {
    const startTime = performance.now()
    
    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime
      setMetrics(prev => ({ ...prev, loadTime }))
    }

    // Measure render time
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({ ...prev, renderTime: entry.duration }))
        }
      })
    })

    observer.observe({ entryTypes: ['measure'] })

    // Measure memory usage (if available)
    if ('memory' in performance) {
      setMetrics(prev => ({
        ...prev,
        memoryUsage: performance.memory.usedJSHeapSize
      }))
    }

    measureLoadTime()

    return () => {
      observer.disconnect()
    }
  }, [])

  // Only show metrics in development
  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>
  }

  return (
    <div className="relative">
      {/* Performance metrics overlay */}
      <div className="fixed top-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
        <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
      </div>
      {children}
    </div>
  )
}

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      e.preventDefault()
      const targetId = target.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return <>{children}</>
}

const KeyboardNavigation = ({ children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip navigation for input fields
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return
      }

      // Alt + N: Navigate to next section
      if (e.altKey && e.key === 'n') {
        e.preventDefault()
        const currentElement = document.activeElement
        const nextSection = currentElement?.closest('section')?.nextElementSibling
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' })
          nextSection.focus()
        }
      }

      // Alt + P: Navigate to previous section
      if (e.altKey && e.key === 'p') {
        e.preventDefault()
        const currentElement = document.activeElement
        const prevSection = currentElement?.closest('section')?.previousElementSibling
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth' })
          prevSection.focus()
        }
      }

      // Escape: Focus back to main content
      if (e.key === 'Escape') {
        e.preventDefault()
        const mainContent = document.querySelector('main')
        if (mainContent) {
          mainContent.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return <>{children}</>
}

const AccessibilityFeatures = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  useEffect(() => {
    // Apply accessibility classes to body
    if (highContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }

    if (largeText) {
      document.body.classList.add('large-text')
    } else {
      document.body.classList.remove('large-text')
    }
  }, [highContrast, largeText])

  // Accessibility toggle component (only in development)
  const AccessibilityToggle = () => {
    if (process.env.NODE_ENV !== 'development') return null

    return (
      <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg space-y-2 z-50">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="high-contrast"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="high-contrast" className="text-xs">High Contrast</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="large-text"
            checked={largeText}
            onChange={(e) => setLargeText(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="large-text" className="text-xs">Large Text</label>
        </div>
      </div>
    )
  }

  return (
    <>
      <AccessibilityToggle />
      {children}
    </>
  )
}

export {
  LazyImage,
  LazyComponent,
  PerformanceMonitor,
  SmoothScroll,
  KeyboardNavigation,
  AccessibilityFeatures
}
