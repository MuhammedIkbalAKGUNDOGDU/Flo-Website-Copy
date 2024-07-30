import React from "react";

const mainpageads = ({ link }) => {
  console.log(link);
  return (
    <div className="Mainpageads-container">
      <img src={link} alt="Mainpage Ad" className="Mainpageads-image" />
    </div>
  );
};

export default mainpageads;
