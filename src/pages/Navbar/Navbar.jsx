import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const singOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div className="relative ">
      <div className="navbar bg-base-100 drop-shadow-2xll shadow-red-500 z-40 fixed border mb-10 ">
        <div className="flex-1">
          <label
            tabIndex={0}
            htmlFor="navbar-drawer"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="w-25 h-50">
            <img src={logo} alt="logo" className="md:w-54 md:h-14 w-50 h-10" />
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={singOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
