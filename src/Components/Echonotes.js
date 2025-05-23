import '../Styles/Echonotes.css'
import { useRef, useEffect, useState } from 'react';
import Header from './Header'
import SessionInfo from './SessionInfo'
import Transcription from './Transcription';
import Sidebar from './Sidebar';

function Echonotes() {
  const containerRef = useRef(null);
  const transcriptionRef = useRef(null)
  const sidebarRef = useRef(null);
  const resizerRef = useRef(null);

  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const resizer = resizerRef.current;
    const left = transcriptionRef.current;
    const right = sidebarRef.current;
    const container = containerRef.current;

    if (!container || !left || !right || !resizer) {
      return;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const resizerWidth = resizer.getBoundingClientRect().width;
    const minPanelWidth = 300;

    const initialLeftWidth = Math.floor((containerWidth - resizerWidth) * 0.55);
    const initialRightWidth = containerWidth - resizerWidth - initialLeftWidth;

    let leftRatio = initialLeftWidth / (containerWidth - resizerWidth);

    left.style.width = `${initialLeftWidth}px`;
    right.style.width = `${initialRightWidth}px`;

    let startX = 0;
    let startLeftWidth = 0;

    const onMouseDown = (e) => {
      startX = e.clientX;
      startLeftWidth = left.getBoundingClientRect().width;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      const currentContainerWidth = container.getBoundingClientRect().width;

      let newLeftWidth = Math.max(minPanelWidth, startLeftWidth + dx);
      let newRightWidth = currentContainerWidth - newLeftWidth - resizerWidth;

      if (newRightWidth < minPanelWidth) {
        newRightWidth = minPanelWidth;
        newLeftWidth = currentContainerWidth - newRightWidth - resizerWidth;
      }

      if (newLeftWidth < minPanelWidth) {
        newLeftWidth = minPanelWidth;
        newRightWidth = currentContainerWidth - newLeftWidth - resizerWidth;
      }

      left.style.width = `${newLeftWidth}px`;
      right.style.width = `${newRightWidth}px`;

      leftRatio = newLeftWidth / (currentContainerWidth - resizerWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const handleResize = () => {
      const currentContainerWidth = container.getBoundingClientRect().width;
      const totalMinWidth = minPanelWidth * 2 + resizerWidth;

      let adjustedWidth = Math.max(currentContainerWidth, totalMinWidth);
      const newLeftWidth = Math.max(minPanelWidth, (adjustedWidth - resizerWidth) * leftRatio);
      const newRightWidth = Math.max(minPanelWidth, adjustedWidth - resizerWidth - newLeftWidth);

      left.style.width = `${newLeftWidth}px`;
      right.style.width = `${newRightWidth}px`;
    };

    resizer.addEventListener('mousedown', onMouseDown);
    window.addEventListener('resize', handleResize);

    return () => {
      resizer.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <div className="echonotes">
      <Header />
      <SessionInfo
        recording={recording}
        playing={playing}
        setRecording={setRecording}
        setPlaying={setPlaying}
      />
      <div className="main-content" ref={containerRef}>
        <div className="left-panel" ref={transcriptionRef}>
          <Transcription recording={recording} playing={playing} />
        </div>
        <div className="resizer" ref={resizerRef} />
        <div className="right-panel" ref={sidebarRef}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Echonotes;
