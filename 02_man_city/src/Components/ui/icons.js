import React from "react";

import { Link } from "react-router-dom";

import mcitylogo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        height: "70px",
        width: "70px",
        background: `url(${mcitylogo}) no-repeat`
      }}
    />
  );

  if (props.link) {
    return (
      <Link to={props.link} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
