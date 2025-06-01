import React from 'react'
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedComponent from './ThemedComponent';

const Sixteen = () => {
  return (
    <div>
        <ThemeProvider>
            <ThemeSwitcher />
            <ThemedComponent />
        </ThemeProvider>
    </div>
  )
}

export default Sixteen