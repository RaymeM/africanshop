import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
    <div>
        <div className="nav">

            <h2>LOGO</h2>

            <div>
                {/* <Link>Search</Link> */}
            </div>

        </div>

        <Outlet />
        <p>Footer</p>
    </div>
    );
  }
  
  export default Layout;
  