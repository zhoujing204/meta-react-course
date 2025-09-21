import { useTheme } from './ThemeHook';
import { THEMES } from './ThemeConstants';

export default function Toolbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
            <button onClick={toggleTheme}>
                Switch to {theme === THEMES.LIGHT ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
}