import '../Styles/SessionInfo.css'
import RecordingSuite from './RecordingSuite';

function RecordingInfo() {
  return (
    <div className="session-info">
      <RecordingSuite />
      <input type="text" className="title-box" placeholder="recording title" name='title' required />
      
      <div className="file">
        <button className="file-button">
          <div className="file-text">Save</div>
          <i className="file-icon fa-solid fa-cloud"></i>
        </button>
        <button className="file-button">
          <div className="file-text">Download</div>
          <i className="file-icon fa-solid fa-floppy-disk"></i>
        </button>
      </div>
    </div>
  );
}

export default RecordingInfo;