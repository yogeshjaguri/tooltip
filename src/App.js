import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tooltip position="top" message="This is a tooltip on top">
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip position="bottom" message="This is a tooltip at the bottom">
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip position="left" message="This is a tooltip on the left">
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip position="right" message="This is a tooltip on the right">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
