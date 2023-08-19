import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { atomWithStorage } from 'jotai/utils'
import { useAtomValue } from 'jotai'
import { jotaiStore } from '../lib/store'

const darkModeAtom = atomWithStorage('dark-mode', false)

const actions = {
  // TODO
  toggle: () => jotaiStore.set(darkModeAtom, prev => !prev),
}

const DarkModeActionContext = createContext<
  typeof actions
  >(null!)
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

function getMatches(query: string): boolean {
  // Prevents SSR issues
  if (typeof window !== 'undefined')
    return window.matchMedia(query).matches
  return false
}

export function DarkModeProvider(props: PropsWithChildren) {
  // const isOSDark = useMediaQuery(COLOR_SCHEME_QUERY)

  useEffect(() => {
    const matchMedia = window.matchMedia(COLOR_SCHEME_QUERY)
    // Triggered at the first client-side load and if query changes
    const handleChange = () => {
      jotaiStore.set(darkModeAtom, getMatches(COLOR_SCHEME_QUERY))
    }
    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange)
    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [])
  return <DarkModeActionContext.Provider value={actions}>
    {props.children}
    <ThemeObserver />
  </DarkModeActionContext.Provider>
}

function ThemeObserver() {
  const isDarkMode = useAtomValue(darkModeAtom)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.dataset.theme = 'business'
      document.documentElement.classList.toggle('dark', true)
    }
    else {
      document.documentElement.dataset.theme = 'bumblebee'
      document.documentElement.classList.toggle('dark', false)
    }
  }, [isDarkMode])

  return null
}

export function useThemeActions() {
  return useContext(DarkModeActionContext)
}

export const useIsDark = () => useAtomValue(darkModeAtom)
