import React from "react";

const tripleads = ({ link1, link2, link3 }) => {
  return (
    <div className="Mainpageads-container margin1">
      <img src={link1} alt="Mainpage Ad" className="Mainpageads-image-3" />
      <img src={link2} alt="Mainpage Ad" className="Mainpageads-image-3" />
      <img src={link3} alt="Mainpage Ad" className="Mainpageads-image-3" />
    </div>
  );
};

export default tripleads;
