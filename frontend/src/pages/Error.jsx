import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[3em]">Oops!!!</h1>
      <h2 className="font-semibold text-[1.5em]"> Something went wrong!!</h2>
      <h3 className="font-semibold text-[1em]">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;