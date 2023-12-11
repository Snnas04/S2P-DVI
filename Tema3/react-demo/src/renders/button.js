import { Link } from 'react-router-dom';

let link = "/extra";

function Button() {
  return (
    <div id="buttonContent">
      <Link to={link}>
        <button id="button">Go to Extra</button>
      </Link>
    </div>
  )
}

export default Button;