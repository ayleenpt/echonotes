import { useState, useEffect, useRef } from 'react';
import '../Styles/RecordingSuite.css';

function RecordingSuite() {
  const [playPause, setPlayPause] = useState("fa-circle-play");
  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  const clickPlayPause = () => {
    if (!recording) return;

    setPlayPause(prev =>
      prev === "fa-circle-play" ? "fa-circle-pause" : "fa-circle-play"
    );

    if (playPause === "fa-circle-play") {
      startTimer();
    } else {
      pauseTimer();
    }
  };

  const clickRecording = () => {
    if (recording) return;
    setRecording(true);
    setPlayPause("fa-circle-pause");
    setTime(0);
    startTimer();
  };

  const clickStop = () => {
    if (recording) {
      setRecording(false);
      pauseTimer();
      resetTimer();
      setPlayPause("fa-circle-play");
    }
  };

  useEffect(() => {
    return () => pauseTimer();
  }, []);

  return (
    <div className="recording-suite">
      <div className="recording-button">
        <div
          className={`inner-circle ${recording ? 'recording-in-progress' : ''}`}
          onClick={clickRecording}
        />
      </div>
      <div className="recording-time">{formatTime(time)}</div>
      <i 
        className="recording-icon fa-regular fa-circle-stop" 
        onClick={clickStop}
      ></i>
      <i 
        className={`recording-icon fa-regular ${playPause}`} 
        onClick={clickPlayPause}
      ></i>
    </div>
  );
}

export default RecordingSuite;
