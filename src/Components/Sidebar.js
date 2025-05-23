import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import FontOptions from './FontOptions';

function Sidebar() {
  const [fontSize, setFontSize] = useState(12);
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);
  const [strikeThroughActive, setStrikeThroughActive] = useState(false);

  const increaseFont = () => setFontSize(prev => prev + 1);
  const decreaseFont = () => setFontSize(prev => prev - 1);
  const handleBoldActive = () => setBoldActive(prev => !prev);
  const handleItalicActive = () => setItalicActive(prev => !prev);
  const handleUnderlineActive = () => setUnderlineActive(prev => !prev);
  const handleStrikeThroughActive = () => setStrikeThroughActive(prev => !prev);

  return (
    <div className="sidebar">
      <FontOptions />
    </div>
  );
}

export default Sidebar;
