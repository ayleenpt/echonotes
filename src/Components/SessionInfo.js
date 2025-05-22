import '../Styles/SessionInfo.css'
import RecordingSuite from './RecordingSuite';

function RecordingInfo() {
  return (
    <div className="session-info">
      <RecordingSuite />
      <input type="text" className="title-box" placeholder="recording title" name='title' required />
      <div></div>
    </div>
  );
}

export default RecordingInfo;