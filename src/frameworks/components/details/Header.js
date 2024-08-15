import React from "react";

import { Link } from "react-router-dom";

const Header = ({ orderNo }) => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/">
        <md-icon-button class="min-ml-3">
          <md-icon>arrow_back</md-icon>
        </md-icon-button>
      </Link>
      <div className="md-typescale-headline-small grow my-6">
        Details - #{orderNo}
      </div>
    </div>
  );
};

export default Header;
