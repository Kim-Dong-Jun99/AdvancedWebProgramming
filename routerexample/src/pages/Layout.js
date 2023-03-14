import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/carInfo">CarInfo</Link>
                    </li>
                    <li>
                        <Link to="/userInfo">UserInfo</Link>
                    </li>
                    <Outlet/>
                </ul>
            </nav>
        </>
    );
}

export default Layout;