import { Link } from "react-router-dom";

import './AppBar.scss';

export default function TopBar(props) {
  return (
    <div className="AppBar">

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
