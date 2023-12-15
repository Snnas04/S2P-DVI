import { Link } from 'react-router-dom';

let linkExtra = "/extra";
let linkAPI = "/apiPage";

function Button() {
  return (
    <div id="buttonContent">
      <Link to={linkExtra}>
        <button id="button">Go to Extra</button>
      </Link>
      <Link to={linkAPI}>
        <button id="button">Go to API</button>
      </Link>
    </div>
  )
}

export default Button;