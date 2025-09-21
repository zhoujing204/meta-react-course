import { useState } from "react";
import { ThemeContext } from './ThemeContext';
import { THEMES } from './ThemeConstants';


export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
    };

    const value = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}