import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdownSeconds, setCountdownSeconds] = useState(0);

  useEffect(() => {
    const savedStartTime = localStorage.getItem('startTime');
    if (savedStartTime) {
      const elapsedSeconds = Math.floor((Date.now() - parseInt(savedStartTime)) / 1000);
      const remainingSeconds = Math.max(0, 120 - (elapsedSeconds % 125));
      setCountdownSeconds(remainingSeconds);
    } else {
      setCountdownSeconds(120);
      localStorage.setItem('startTime', Date.now().toString());
    }

    const intervalId = setInterval(() => {
      setCountdownSeconds(prevSeconds => {
        const newSeconds = prevSeconds - 1;
        if (newSeconds <= 0) {
          setTimeout(() => {
            setCountdownSeconds(120);
            localStorage.setItem('startTime', Date.now().toString());
          }, 5000);
        }
        return newSeconds >= 0 ? newSeconds : 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Calculate minutes and seconds from countdownSeconds
  const minutes = Math.floor(countdownSeconds / 60);
  const seconds = countdownSeconds % 60;

  return (
    <div>
      
      <p>
        Time Remaining: {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

export default CountdownTimer;



