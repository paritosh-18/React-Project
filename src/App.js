//import React from "react"; -> not needed as we are not using react to create components but JSX
import ReactDOM from "react-dom/client";
import FooterContainer from "./components/FooterContainer";
import BodyContainer from "./components/BodyContainer";
import HeaderContainer from "./components/HeaderContainer";

const PageContainer = () => (
  <>
    <HeaderContainer />
    <BodyContainer />
    <FooterContainer />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageContainer />);
