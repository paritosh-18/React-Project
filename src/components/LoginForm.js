import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <h1>This is the form page</h1>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default LoginForm;
