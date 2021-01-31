import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function TopBar(props) {
  return (
    {/* <div className="flex justify-between p-2 bg-blue">
      <button className="btn">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="ml-2">Contact Me</span>
      </button>
      <nav className="mx-2 flex">
        <Link className={`link ${matchPath('/') ? 'bg-red-600' : ''}`} to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/users">
          Users
        </Link>
      </nav>
    </div> */}
  );
}
