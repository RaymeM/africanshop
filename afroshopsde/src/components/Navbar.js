import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="left border">
        <NavLink to="/">
          <div className="logo"></div></NavLink>
          <NavLink to="/">
          <div className="homeButton">Home</div>
        </NavLink>
      </div>
      <div className="right">
        <NavLink className="navLink" to="/map">
          Map
        </NavLink>
        <NavLink className="navLink" to="/posts">
          Posts
        </NavLink>
        
      </div>
    </div>
  );
}
