import React from "react";
import trophyImage from "../assets/1.png";

const Trophy = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div>
        <img
          style={{ height: "550px", width: "full" }}
          src={trophyImage}
          alt="NetStart Logo"
        />
      </div>
    </div>
  );
};

export default Trophy;
