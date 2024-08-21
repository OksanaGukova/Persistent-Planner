import React from 'react';

const Hour = ({ hour, onClick }) => {
  return (
    <div className="hour" onClick={onClick}>
      {hour}:00
    </div>
  );
};

export default Hour;
