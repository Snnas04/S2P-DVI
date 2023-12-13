function pageExtra() {
  const msgConsole = () => {
    console.log("Button clicked!");
    window.appMessages.consoleMessage("Button clicked!");
  };

  return (
    <div id='content'>
        <h1>Page Extra</h1>
        <img src="./logo512.png" className="App-logo" alt="logo" />
        <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor elit, hendrerit vitae ultrices quis, gravida sit amet justo. Nam elit ante, accumsan 
            in luctus mollis, fermentum ut est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim suscipit mauris, nec accumsan nunc hendrerit 
            eget. Proin eget tellus eu eros imperdiet fermentum. Curabitur iaculis dapibus felis, vel euismod enim aliquam eget. Nullam eleifend est purus, varius 
            fringilla arcu fringilla vel. Maecenas volutpat magna vel dapibus tempus. Suspendisse ultricies urna id nisl eleifend, vel posuere nibh fringilla. Duis 
            rhoncus lacus laoreet erat sodales tincidunt. 
        </p>
        <button onClick={msgConsole}>
          Console Message
        </button>
    </div>
  )
}

export default pageExtra;