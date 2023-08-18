import { useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'
import { useMediaQuery } from './useMediaQuery'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

export function useDarkMode(defaultValue = false) {
  const isOSDark = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setDarkModeStorage] = useLocalStorageState<boolean>(
    'usehooks-ts-dark-mode',
    { defaultValue: defaultValue ?? isOSDark ?? false },
  )

  // Update darkMode if os prefers changes
  useEffect(() => {
    setDarkModeStorage(isOSDark)
  }, [isOSDark])

  return {
    isDarkMode: isDarkMode ?? false,
    toggle: () => setDarkModeStorage(prev => !prev),
    enable: () => setDarkModeStorage(true),
    disable: () => setDarkModeStorage(false),
  }
}
