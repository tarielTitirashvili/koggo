import { createContext, useContext, useEffect, useState } from 'react';

// Define themes
const themes = {
  light: { className: 'light' },
  dark: { className: 'dark' },
  blueOrange: { className: 'blue_orange' },
  greenTeal: { className: 'green_teal' },
  purpleYellow: { className: 'purple_yellow' }
};

const colorsForOtherLibraries = {
  light: { className: '#30302e' },
  dark: { className: '#E0E0E0' },
  blueOrange: { className: '#000000' },
  greenTeal: { className: '#C8C8C8' },
  purpleYellow: { className: '#E0E0E0' }
}

const themeNames = ['dark', 'light', 'blueOrange', 'greenTeal', 'purpleYellow'];

// Create context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [colormode, setColorMode] = useState(themeNames[0]);

  const toggleColorMode = () => {
    const currentColorModeIndex = themeNames.indexOf(colormode);
    if (currentColorModeIndex >= themeNames.length - 1) {
      setColorMode(themeNames[0]);
    } else {
      setColorMode(themeNames[currentColorModeIndex + 1]);
    }
  };

  useEffect(() => {
    if (themes[colormode]?.className) {
      document.body.className = ''; // Clear previous theme class
      document.body.classList.add(themes[colormode].className);
    }

    return () => {
      if (themes[colormode]?.className) {
        document.body.classList.remove(themes[colormode].className);
      }
    };
  }, [colormode]);

  return (
    <ThemeContext.Provider value={{ colormode, colorForOtherLibs: colorsForOtherLibraries[colormode], toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);