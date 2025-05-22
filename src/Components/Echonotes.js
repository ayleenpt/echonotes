import '../Styles/Echonotes.css'
import React, { useRef, useEffect } from 'react';
import Header from './Header'
import SessionInfo from './SessionInfo'
import Transcription from './Transcription';
import Sidebar from './Sidebar';

function Echonotes() {
  const containerRef = useRef(null);
  const transcriptionRef = useRef(null)
  const sidebarRef = useRef(null);
  const resizerRef = useRef(null);

  useEffect(() => {
    const resizer = resizerRef.current;
    const left = transcriptionRef.current;
    const right = sidebarRef.current;
    const container = containerRef.current;

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
      const newLeftWidth = Math.max(200, startLeftWidth + dx);
      const containerWidth = container.getBoundingClientRect().width;
      const newRightWidth = Math.max(200, containerWidth - newLeftWidth - 5);

      if (newLeftWidth + newRightWidth + 5 <= containerWidth) {
        left.style.width = `${newLeftWidth}px`;
        right.style.width = `${newRightWidth}px`;
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    resizer.addEventListener('mousedown', onMouseDown);
    return () => {
      resizer.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  return(
    <div className="echonotes">
      <Header />
      <SessionInfo />
      <div className="main-content" ref={containerRef}>
        <div className="left-panel" ref={transcriptionRef}>
          <Transcription />
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