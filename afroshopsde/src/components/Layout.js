import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* <Link>Search</Link> */}

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
