import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="left">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="right">
        <NavLink to="/"></NavLink>
      </div>
    </div>
  );
}
