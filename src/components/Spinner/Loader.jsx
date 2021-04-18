import React from "react";
import "./Loader.css";
import Loader from "react-loader-spinner";

const LoaderSpiner = () => {
  return (
    <div className="spinner">
      <Loader type="Circles" color="#00BFFF" timeout={3000} height={100} width={100} />
    </div>
  );
};

export default LoaderSpiner;
