import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1 className="font-bold">Oops... an error occured</h1>
      <h2 className="font-semibold">
        {status}: {statusText}
      </h2>
      <h4>
        <Link className="rounded-xl bg-slate-300 m-1 p-1" to={"/"}>Home</Link> - Click to go home
      </h4>
    </div>
  );
};

export default Error;
