import React, { useEffect } from 'react';
import '../Styles/RecordingSuite.css';

function RecordingSuite({ recording, playing, setRecording, setPlaying }) {
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const [time, setTime] = React.useState(0);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (recording && playing && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else if ((!recording || !playing) && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!recording) {
      setTime(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [recording, playing]);

  const clickPlayPause = () => {
    if (!recording) return;
    setPlaying(prev => !prev);
  };

  const clickRecording = () => {
    if (recording) return;
    setRecording(true);
    setPlaying(true);
    setTime(0);
  };

  const clickStop = () => {
    if (recording) {
      setRecording(false);
      setPlaying(false);
      setTime(0);
    }
  };

  return (
    <div className="recording-suite">
      <div
        className={`recording-button ${recording ? 'recording-in-progress' : ''}`}
        onClick={clickRecording}
      >
        <div className="inner-circle" />
      </div>
      <div className="recording-time">{formatTime(time)}</div>
      <i
        className="recording-icon fa-regular fa-circle-stop"
        onClick={clickStop}
      />
      <i
        className={`recording-icon fa-regular ${playing ? "fa-circle-pause" : "fa-circle-play"}`}
        onClick={clickPlayPause}
      />
    </div>
  );
}

export default RecordingSuite;
