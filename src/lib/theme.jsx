'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(t) {
  const root = document.documentElement
  if (t === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')

    if (stored) {
      // User manually picked a theme before — respect it
      setTheme(stored)
      applyTheme(stored)
    } else {
      // No manual preference — follow the OS/device setting
      const systemTheme = getSystemTheme()
      setTheme(systemTheme)
      applyTheme(systemTheme)

      // Auto-update if the OS setting changes (only while no manual pref is saved)
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (e) => {
        if (!localStorage.getItem('theme')) {
          const next = e.matches ? 'dark' : 'light'
          setTheme(next)
          applyTheme(next)
        }
      }
      mql.addEventListener('change', handler)
      setMounted(true)
      return () => mql.removeEventListener('change', handler)
    }

    setMounted(true)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={!mounted ? { visibility: 'hidden' } : undefined}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

