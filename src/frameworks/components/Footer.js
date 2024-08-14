import React from "react";

import "./Footer.scss";

const Footer = () => {
    let date_now = new Date();
  return (
    <div className="footer text-center py-4 md-typescale-body-medium">
        &copy; {date_now.getFullYear()} Badminton Wellington Inc.
        <br/>
        Developed by <a href="https://webtech.id" target="_blank" rel="noreferrer">Frumentius</a>
    </div>
  );
};

export default Footer;
