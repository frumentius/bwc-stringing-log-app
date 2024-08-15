import React from "react";
import "./BrandLogoIcon.scss";

const BrandLogoIcon = ({ type = "" }) => {
  return <img className="brand-logo-icon" src={"/assets/images/" + type + "-logo.png"} alt={type} />;
};

export default BrandLogoIcon;
