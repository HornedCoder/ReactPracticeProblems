import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div>
        <button onClick={toggleTheme}>
            Switch to {theme === "light"? "dark":"light"} Theme
        </button>
    </div>
  );
}

export default ThemeSwitcher