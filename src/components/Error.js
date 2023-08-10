import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Oops... an error occured</h1>
      <h2>
        {status}: {statusText}
      </h2>
      <h4>
        <Link to={"/"}>Home</Link> - Click to go home
      </h4>
    </div>
  );
};

export default Error;
