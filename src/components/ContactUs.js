import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>This is the contact us page</h1>
      <h2>
        <Link to={"/"}>Home</Link> - Press to go home
      </h2>
    </div>
  );
};

export default ContactUs;
