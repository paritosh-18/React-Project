import { useState } from "react";
import { IMG_LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between m-1 p-1 bg-gray-50 shadow-md">
      <Link to={"/"}>
        <img
          className="w-20 m-2 p-1 rounded-2xl shadow-md"
          src={IMG_LOGO_URL}
          alt="logo"
        />
      </Link>
      <ul className="flex my-8 mx-1 p-2">
        <li className="mx-2 p-1 hover:bg-slate-200 rounded-xl" key="home">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-2 p-1 hover:bg-slate-200 rounded-xl" key="AboutUs">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="mx-2 p-1 hover:bg-slate-200 rounded-xl" key="Cart">
          Cart
        </li>
      </ul>
      <div className="flex my-8 mx-1 p-2">{isOnline ? "🟢" : "🔴"}</div>
      {loggedIn ? (
        <button
          className="rounded-md bg-purple-200 h-10 w-14 my-8 shadow-md hover:bg-purple-300"
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="rounded-md bg-purple-200 h-10 w-14 my-8 shadow-md hover:bg-purple-300"
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          <Link to={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default HeaderContainer;
