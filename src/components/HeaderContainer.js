import { useState } from "react";
import { IMG_LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="Header">
      <Link to={"/"}>
        <img id="image" src={IMG_LOGO_URL} alt="logo" />
      </Link>
      <ul id="list">
        <li key="home">
          <Link to={"/"}>Home</Link>
        </li>
        <li key="AboutUs">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li key="Cart">Cart</li>
      </ul>
      {isOnline ? "Yes" : "No"}
      {loggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
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
