import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  const styles = {
    padding: '20px',
    marginTop: '10px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return <div style={styles}>This is a {theme} themed box!</div>;
};

export default ThemedComponent;
