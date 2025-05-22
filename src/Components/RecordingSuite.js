import { useState } from 'react';
import '../Styles/RecordingSuite.css';

function RecordingSuite() {
  const [playPause, setPlayPause] = useState("fa-circle-play");

  const clickPlayPause = () => {
    setPlayPause(prev => 
      prev === "fa-circle-play" ? "fa-circle-pause" : "fa-circle-play"
    );
  }

  return (
    <div className="recording-suite">
      <i className="fa-solid fa-record-vinyl"></i>
      <div className="recording-time">00:00:00</div>
      <i className="recording-icon fa-regular fa-circle-stop"></i>
      <i 
        className={`recording-icon fa-regular ${playPause}`} 
        onClick={clickPlayPause}
      ></i>
    </div>
  );
}

export default RecordingSuite;
