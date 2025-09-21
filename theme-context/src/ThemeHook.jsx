import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
};