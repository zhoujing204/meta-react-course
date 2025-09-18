import { createContext, useContext} from 'react';


// Create context with a default value to prevent fast refresh issues
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    // Remove the undefined check since we have a default value
    return context;
};
