import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* <Link>Search</Link> */}

      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default Layout;
