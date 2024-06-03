import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const links = <>
  <li><NavLink to="/home">Home</NavLink></li>
  <li><NavLink to="/addcoffee">Add Product</NavLink></li>
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">COFFEE SHOP</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className=" bg-black text-sm hover:bg-green-600 text-white font-semibold uppercase p-2 rounded-md" to="/addcoffee">Order Now</Link>
  </div>
</div>
    );
};

export default NavBar;