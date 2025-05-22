import { useState } from 'react';
import '../Styles/RecordingSuite.css';

function RecordingSuite() {
  const [playPause, setPlayPause] = useState("fa-circle-play");
  const [recording, setRecording] = useState("");

  const clickPlayPause = () => {
    setPlayPause(prev => 
      prev === "fa-circle-play" ? "fa-circle-pause" : "fa-circle-play"
    );
  }

  const clickRecording = () => {
    setRecording(prev =>
      prev === "" ? "recording-in-progress" : ""
    );
  }

  return (
    <div className="recording-suite">
      <div className="recording-button">
        <div
          className={`inner-circle ${recording}`}
          onClick={clickRecording}
        />
      </div>
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
