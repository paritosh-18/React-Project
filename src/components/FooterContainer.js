import { Link } from "react-router-dom";
const FooterContainer = () => {
  const st = "my-8 mx-3 p-2 hover:bg-purple-300 rounded-md";
  return (
    <div className="h-28 bg-slate-200 flex justify-between m-2 p-2 ">
      <div className=" flex">
        <h3 className={st} key="Contact">
          <Link to={"/contact"}>Contact Us</Link>
        </h3>
        <h3 className={st} key="copyright">
          Copyright
        </h3>
      </div>
      <div>
        <h1 className="hover:underline my-8 mx-3 p-2">
          <Link to={"/instamart"}>Learn About Instamart ®️</Link>
        </h1>
      </div>
    </div>
  );
};

export default FooterContainer;
