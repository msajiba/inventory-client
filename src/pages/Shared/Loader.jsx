import React from "react";
import { RiseLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <RiseLoader color="#36d7b7" />
      </div>
    </>
  );
};

export default Loader;
