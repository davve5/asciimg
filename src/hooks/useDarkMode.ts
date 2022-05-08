import useLocalStorage from 'hooks/useLocalStorage'
import useMediaQuery from 'hooks/useMediaQuery'
import { useEffect } from 'react'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

type ToggleDarkMode = () => void;

const useDarkMode = (defaultValue?: boolean): [boolean, ToggleDarkMode] => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'dark-mode',
    defaultValue ?? isDarkOS ?? false,
  )

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  useEffect(() => {
    setDarkMode(isDarkOS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS])

  return [
    isDarkMode,
    toggleDarkMode,
  ]
}

export default useDarkMode
