import { Outlet, Link } from "react-router-dom";



function Layout() {
    return (
    <div>
        <div className="nav">



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
  