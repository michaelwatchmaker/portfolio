import React from "react";
import { Helmet } from "react-helmet";

const Colorizer = ({ hex }) => {
  return (
    <Helmet>
      <style>{`body { background-color: ${hex}; }`}</style>
      <meta name="theme-color" content={hex}/>
    </Helmet>
  );
};

export default Colorizer