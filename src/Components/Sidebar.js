import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import FontOptions from './FontOptions';
import DrawOptions from './DrawOptions';

function Sidebar() {
  return (
    <div className="sidebar">
      <FontOptions />
      <DrawOptions />
    </div>
  );
}

export default Sidebar;
