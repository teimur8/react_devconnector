import React from "react";
import { CityLogo } from "../ui/icons";

export default props => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link="/" />
      </div>
      <div className="footer_discl">
        Mancester city 2018. All rights reserved.
      </div>
    </footer>
  );
};
