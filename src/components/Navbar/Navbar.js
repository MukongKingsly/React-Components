import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo">
              Home
            </Link>
          </li>
          <li>
            <Link to="/loginone">Login One</Link>
          </li>
          <li>
            <Link to="/logintwo">Login Two</Link>
          </li>
          <li>
            <Link to="/loginthree">Login Three</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;