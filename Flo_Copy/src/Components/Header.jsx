import React from "react";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Searchbox from "./Searchbox";
import logo from "../assets/flo-logo.svg";

const Header = () => {
  return (
    <div className="header-container1">
      <img className="mainpage-logo" src={logo} alt="logo"></img>
      <div className="cinsiyet"> Kadın </div>
      <div className="cinsiyet"> Erkek </div>
      <div className="cinsiyet"> Çocuk </div>
      <Searchbox></Searchbox>
      <div className="header-container2">
        <div className="firstrow-user-box">
          <CiUser className="firstrow-user"></CiUser>
          <div className="firstrow-user-font">Giriş Yap</div>
        </div>
        <div className="firstrow-cart-box">
          <IoCartOutline className="firstrow-cart"></IoCartOutline>
          <div className="firstrow-cart-font">Sepetim</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
