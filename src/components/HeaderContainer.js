import { useContext, useState } from "react";
import { IMG_LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HeaderContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);

  const items = useSelector((store) => store.cart.items);

  const st = "mx-2 p-1 hover:bg-slate-200 rounded-xl";
  const btn_st =
    "rounded-md bg-purple-200 h-10 w-14 my-8 shadow-md hover:bg-purple-300";
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
        <li className={st} key="home">
          <Link to={"/"}>Home</Link>
        </li>
        <li className={st} key="AboutUs">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className={st} key="Cart">
          <Link to="/cart">Cart {items.length}</Link>
        </li>
      </ul>
      <div className="flex my-8 mx-1 p-2">{isOnline ? "🟢" : "🔴"}</div>
      <h1 className="flex my-8 mx-1 p-2">Welcome {user.name}</h1>
      {loggedIn ? (
        <button
          className={btn_st}
          onClick={() => {
            setLoggedIn(false);
            setUser({
              name: "",
              email: "",
            });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className={btn_st}
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
