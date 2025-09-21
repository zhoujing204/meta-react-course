import { createContext} from 'react';


// Create context with a default value to prevent fast refresh issues
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

// Add this export
export { ThemeContext };
