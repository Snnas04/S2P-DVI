import React from 'react';
import Text from "./text";
import Button from "./button";
import ButtonAPI from "./apiButton";

function Home() {
  return (
    <div id="content">
      <div> <Text /> </div>
      <div> <Button /> </div>
      <div> <ButtonAPI /> </div>
    </div>
  )
}

export default Home;
