import { useState, useEffect } from "react";

export const RealTimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        console.log('⏰ Starting clock timer');

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup
        return () => {
            console.log('🛑 Stopping clock timer');
            clearInterval(timer);
        };


    }, []); // Empty dependency, runs once on mount

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Real-Time Clock</h2>
            <p>Current time: {currentTime.toLocaleTimeString()}</p>
        </div>
    );
}