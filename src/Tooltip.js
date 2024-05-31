import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, message, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && (
        <div className={`tooltip-box ${position}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
