import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import './AppBar.scss';

export default function TopBar(props) {
  return (
    <div className="AppBar">
      <div className="contact">
        <FontAwesomeIcon icon={faEnvelope} />
        csvklds
      </div>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className="link" to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
