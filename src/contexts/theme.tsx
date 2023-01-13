import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import type { FC, PropsWithChildren } from 'react';

import { darkTheme, lightTheme } from '../themes';

export interface ThemeProps {
  isDarkMode: boolean;
  changeTheme: () => void;
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState(useColorScheme() === 'dark');

  const changeTheme = useCallback(() => {
    setisDarkMode((currentState) => !currentState);
  }, []);

  const value = useMemo(
    () => ({
      isDarkMode,
      changeTheme,
    }),
    [isDarkMode, changeTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
