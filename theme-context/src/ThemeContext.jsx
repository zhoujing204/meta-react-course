import { createContext } from 'react';


// Create context with a default value to prevent fast refresh issues
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});
