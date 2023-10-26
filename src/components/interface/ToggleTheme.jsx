'use client'
import { useTheme } from 'next-themes'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleChange = (e) => {
    setTheme(e.target.value)
  }

  return (
    <>
      {/* <ToggleButtonGroup
        className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 rounded-lg absolute top-12"
        color="primary"
        value={theme}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="light">LIGHT MODE</ToggleButton>
        <ToggleButton value="dark">DARK MODE</ToggleButton>
      </ToggleButtonGroup> */}

      <button
        onClick={() =>
          currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
        }
        className="absolute top-12 rounded-lg bg-gray-800 px-8 py-2 text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300"
      >
        {currentTheme == 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
      </button>
    </>
  )
}

export default ToggleTheme
