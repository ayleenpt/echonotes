import { useState } from 'react';
import '../Styles/SessionInfo.css';
import RecordingSuite from './RecordingSuite';

function SessionInfo({ recording, playing, setRecording, setPlaying }) {
  const [iconState, setIconState] = useState({
    save: 'default',
    download: 'default',
  });

  const triggerAnimation = (type) => {
    setIconState(prev => ({ ...prev, [type]: 'animating' }));

    setTimeout(() => {
      setIconState(prev => ({ ...prev, [type]: 'default' }));
    }, 1500);
  };

  return (
    <div className="session-info">
      <RecordingSuite
        recording={recording}
        playing={playing}
        setRecording={setRecording}
        setPlaying={setPlaying}
      />
      <input type="text" className="title-box" placeholder="recording title" name="title" required />

      <div className="file">
        <button className="file-button" onClick={() => triggerAnimation('save')}>
          <div className="file-text">Save</div>
          <div className="icon-container">
            <i className={`file-icon fa-solid fa-cloud ${iconState.save === 'animating' ? 'slide-up-out' : 'slide-in'}`} />
            {iconState.save === 'animating' && (
              <i className="file-icon fa-solid fa-check slide-in-check" />
            )}
          </div>
        </button>

        <button className="file-button" onClick={() => triggerAnimation('download')}>
          <div className="file-text">Download</div>
          <div className="icon-container">
            <i className={`file-icon fa-solid fa-floppy-disk ${iconState.download === 'animating' ? 'slide-up-out' : 'slide-in'}`} />
            {iconState.download === 'animating' && (
              <i className="file-icon fa-solid fa-check slide-in-check" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default SessionInfo;
