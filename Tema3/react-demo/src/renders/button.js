let link = "pages/extra.html";

function Button() {
  return (
    <div id="buttonContent">
        <button id="button" onClick={handleClick}>
          Open YT
        </button>
    </div>
  )
}

function handleClick() {
  window.appMessage.sendOpenLink(link);
}

export default Button;