// components/TimerWithClockFace.js
import React, { useState, useEffect } from 'react';

const TimerWithClockFace = () => {
    const [duration, setDuration] = useState(60); // 1 minute default
    const [timeLeft, setTimeLeft] = useState(duration);
    const [timerActive, setTimerActive] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        let interval;
        if (timerActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0 && timerActive) {
            clearInterval(interval);
            setIsFlashing(true);
            setTimeout(() => {
                alert('Time is up!');
                setIsFlashing(false);
            }, 100); // Delay the alert to allow CSS change
            setTimerActive(false);
        }

        return () => clearInterval(interval);
    }, [timerActive, timeLeft]);

    const handleDurationChange = (event) => {
        const newDuration = parseInt(event.target.value) * 60;
        setDuration(newDuration);
        setTimeLeft(newDuration);
        setIsFlashing(false);
    };

    const startTimer = () => setTimerActive(true);
    const pauseTimer = () => setTimerActive(false);
    const resetTimer = () => {
        setTimeLeft(duration);
        setTimerActive(false);
        setIsFlashing(false);
    };

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const strokeDashoffset = circumference - (timeLeft / duration) * circumference;

    const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background
        color: 'white',
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    const selectStyle = {
        padding: '10px 20px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px'
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <svg width="120" height="120">
                <svg width="120" height="120" style={{ display: 'block', margin: '0 auto' }}>
                    <circle
                        cx="60" cy="60" r={radius}
                        fill="none" stroke="#ddd" strokeWidth="10"
                    />
                    <circle
                        cx="60" cy="60" r={radius}
                        fill="none" stroke={isFlashing ? 'transparent' : 'black'} strokeWidth="10"
                        style={isFlashing ? { animation: 'flashAnimation 1s infinite' } : {}}
                        strokeDasharray={circumference}
                        strokeDashoffset={-strokeDashoffset}
                        transform="rotate(-90 60 60)"
                    />
                    <text x="50%" y="50%" fill="black" fontSize="20" textAnchor="middle" dy=".3em">
                        {formatTime()}
                    </text>
                </svg>
                    cx="60" cy="60" r={radius}
                    fill="none" stroke="#ddd" strokeWidth="10"
                /
                <circle
                    cx="60" cy="60" r={radius}
                    fill="none" stroke={isFlashing ? 'transparent' : 'black'} strokeWidth="10"
                    style={isFlashing ? { animation: 'flashAnimation 1s infinite' } : {}}
                    strokeDasharray={circumference}
                    strokeDashoffset={-strokeDashoffset}
                    transform="rotate(-90 60 60)"
                />
                <text x="50%" y="50%" fill="black" fontSize="20" textAnchor="middle" dy=".3em">
                    {formatTime()}
                </text>
            </svg>
            <div>
                <select value={duration / 60} onChange={handleDurationChange} style={selectStyle}>
                    {[1, 5, 10, 15, 20, 25, 30].map((time) => (
                        <option key={time} value={time}>
                            {time} minutes
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button onClick={startTimer} style={buttonStyle}>Start</button>
                <button onClick={pauseTimer} style={buttonStyle}>Pause</button>
                <button onClick={resetTimer} style={buttonStyle}>Reset</button>
            </div>
        </div>
    );
    
};

export default TimerWithClockFace;
