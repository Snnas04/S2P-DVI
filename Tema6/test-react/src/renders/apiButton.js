import React from 'react';

function ButtonAPI({ toggleAPI }) {
  return (
    <div id="apiButtonContent">
      <button id="apiButton" onClick={toggleAPI}>
        Toggle API
      </button>
    </div>
  );
}

export default ButtonAPI;
