import React from 'react';

import './CharComponent.css'

const char = (props) => {
  return (
    <div className="Char" onClick={props.click}>
      <p>{props.char}</p>
    </div>
  );
}

export default char;
