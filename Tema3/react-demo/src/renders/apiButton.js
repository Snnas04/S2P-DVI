import React, { useState } from 'react';
import API from './api';

function ButtonAPI() {
  const [showAPI, setShowAPI] = useState(false);

  const toggleAPI = () => {
    setShowAPI(!showAPI);
  };

  return (
    <div id="apiButtonContent">
      {showAPI ? <API /> : null}
      <button id="apiButton" onClick={toggleAPI}>
        {showAPI ? 'Hide API' : 'Show API'}
      </button>
    </div>
  );
}

export default ButtonAPI;
