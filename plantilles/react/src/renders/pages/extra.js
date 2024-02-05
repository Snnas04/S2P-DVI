import React from 'react';
import './extra.css';

function pageExtra() {
  const msgConsole = () => {
    console.log("Button clicked!");
    window.appMessages.consoleMessage("Button clicked!");
  };

  return (
    <div id='extaraContent'>
        <h1>Page Extra</h1>
        <img src="./logo512.png" className="App-logo" alt="logo" />
        <button onClick={msgConsole}>
          Console Message
        </button>
    </div>
  )
}

export default pageExtra;