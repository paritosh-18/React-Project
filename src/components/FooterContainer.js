import { Link } from "react-router-dom";
const FooterContainer = () => {
  return (
    <div className="Footer">
      <h3 key="Contact">
        <Link to={"/contact"}>Contact Us</Link>
      </h3>
      <h3 key="copyright">Copyright</h3>
    </div>
  );
};

export default FooterContainer;
