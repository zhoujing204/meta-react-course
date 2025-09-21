import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeProvider  from './ThemeProvider';
import  ToolBar from './ToolBar';
import AppContent from './AppContent';

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <ThemeProvider>
            <ToolBar />
            <AppContent
                count={count}
                setCount={setCount}
                reactLogo={reactLogo}
                viteLogo={viteLogo}
            />
        </ThemeProvider>
    )
}