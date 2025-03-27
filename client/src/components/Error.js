import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOps!!</h1>
      <h2>Somthing Went wrong</h2>
      <h4>
        {error.status} : {error.statusText}
      </h4>
    </div>
  );
};
export default Error;
