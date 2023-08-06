import { IMG_LOGO_URL } from "../config";

const HeaderContainer = () => {
  return (
    <div className="Header">
      <a href="/">
        <img id="image" src={IMG_LOGO_URL} alt="logo" />
      </a>
      <ul id="list">
        <li key="home">
          <a href="/">Home</a>
        </li>
        <li key="AboutUs">About Us</li>
        <li key="Cart">Cart</li>
      </ul>
    </div>
  );
};

export default HeaderContainer;
