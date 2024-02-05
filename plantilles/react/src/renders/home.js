import React, { useState } from 'react';
import Text from './text';
import Button from './button';
import ButtonAPI from './apiButton';
import API from './api';
import './home.css';

function Home() {
  const [showAPI, setShowAPI] = useState(false);

  const toggleAPI = () => {
    setShowAPI(!showAPI);
  };

  return (
    <div id="content">
      <div> <Text /> </div>
      <div>
        <h2>Data from API:</h2>
        {showAPI ? <API /> : null}
      </div>
      <div> <Button /> </div>
      <div> <ButtonAPI toggleAPI={toggleAPI} /> </div>
    </div>
  );
}

export default Home;
