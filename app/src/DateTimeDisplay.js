import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="timerBlocks">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
