import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const inputSt = "m-2 p-2 rounded-xl shadow-lg w-52";
  return (
    <div>
      <h1 className="font-bold text-center text-2xl">LOGIN</h1>
      {/* <h1>{console.log(user.name)}</h1> */}
      <div>
        <div className={inputSt}>
          <input
            type="text"
            value={searchText}
            placeholder="Name.."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className={inputSt}>
          <input
            type="text"
            value={searchEmail}
            placeholder="Email.."
            onChange={(e) => {
              setSearchEmail(e.target.value);
            }}
          />
        </div>
        <button
          className=" bg-purple-200 hover:bg-purple-300 w-24 rounded-3xl mx-14 my-2"
          onClick={() => {
            setUser({
              name: searchText,
              email: searchEmail,
            });
          }}
        >
          <Link to={"/"}>Save</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
