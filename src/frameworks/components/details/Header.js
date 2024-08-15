import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Header = ({ orderNo }) => {
  const [bgcolor, setBgcolor] = useState("");
  const [disp, setDisp] = useState("hidden");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 73 && !flag) {
        setBgcolor("-highest");
        setDisp("");
        setFlag(true);
      }

      if (currentScroll <= 73 && flag) {
        setBgcolor("");
        setDisp("hidden");
        setFlag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [flag]);

  return (
    <>
      <div
        className={
          "flex gap-8 fixed top-0 left-0 w-screen py-2 items-center md-background-color-surface-container" +
          bgcolor
        }
      >
        <Link to="/">
          <md-icon-button>
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
        </Link>
        <div className={"md-typescale-title-large " + disp}>
          Details - #{orderNo}
        </div>
      </div>

      <div className="md-typescale-headline-large pt-28 pb-8">
        Details - #{orderNo}
      </div>
    </>
  );
};

export default Header;
