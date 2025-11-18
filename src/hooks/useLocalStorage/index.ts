'use client'

import { useCallback, useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      if (!item) return initialValue

      return JSON.parse(item) as T
    } catch (error) {
      // Keep app running even if localStorage is not accessible
      console.error(`Error reading localStorage key "${key}"`, error)
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(`Error writing localStorage key "${key}"`, error)
    }
  }, [key, storedValue])

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const valueToStore = value instanceof Function ? value(prev) : value
      return valueToStore
    })
  }, [])

  return [storedValue, setValue] as const
}
