import React, { useState } from 'react';
import '../Styles/FontOptions.css';

function FontOptions() {
  const [fontSize, setFontSize] = useState(12);
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);
  const [strikeThroughActive, setStrikeThroughActive] = useState(false);
  const [listActive, setListActive] = useState(false);
  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const alignments = [
    "fa-align-left",
    "fa-align-right",
    "fa-align-justify",
    "fa-align-center"
  ];

  const increaseFont = () => setFontSize(prev => prev + 1);
  const decreaseFont = () => setFontSize(prev => prev - 1);
  const handleBoldActive = () => setBoldActive(prev => !prev);
  const handleItalicActive = () => setItalicActive(prev => !prev);
  const handleUnderlineActive = () => setUnderlineActive(prev => !prev);
  const handleStrikeThroughActive = () => setStrikeThroughActive(prev => !prev);
  const handleListActive = () => setListActive(prev => !prev);
  const cycleAlignment = () => {
    setAlignmentIndex((prevIndex) => (prevIndex + 1) % alignments.length);
  };

  return (
    <div className="font-options">
      <div className="selections">
        <select className="font" id="font">
          <option value="communication">Arial</option>
          <option value="teamwork">Times New Roman</option>
          <option value="technical">Helvetica</option>
          <option value="technical">Calibri</option>
        </select>

        <div className="font-size">
          <button className="font-adjust" onClick={decreaseFont}>-</button>
          {fontSize}
          <button className="font-adjust" onClick={increaseFont}>+</button>
        </div>
      </div>

      <div className="toggles">
        <div className="font-color">
          <i class="sidebar-icon fa-solid fa-font"></i>
          <div className="color-bar" />
        </div>

        <button
          className={`bold format ${boldActive ? "format-active" : ""}`}
          onClick={handleBoldActive}
        ><strong>B</strong></button>
        <button
          className={`italic format ${italicActive ? "format-active" : ""}`}
          onClick={handleItalicActive}
        >I</button>
        <button
          className={`underline format ${underlineActive ? "format-active" : ""}`}
          onClick={handleUnderlineActive}
        >U</button>
        <button
          className={`strikethrough format ${strikeThroughActive ? "format-active" : ""}`}
          onClick={handleStrikeThroughActive}
        >S</button>

        <button className="alignment" onClick={cycleAlignment}>
          <i className={`fa-solid ${alignments[alignmentIndex]}`}></i>
        </button>

        <button
          className={`bullet format ${listActive ? "format-active" : ""}`}
          onClick={handleListActive}
        ><i class="bullet fa-solid fa-list-ul"></i></button>
      </div>
    </div>
  );
}

export default FontOptions;
