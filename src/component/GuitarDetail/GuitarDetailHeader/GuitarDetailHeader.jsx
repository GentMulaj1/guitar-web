import React from "react";
import "./GuitarDetailHeader.scss";
import Logo from "../../shared/Logo/Logo";
import { Link } from "react-router-dom";

const GuitarDetailHeader = () => {
  return (
    <div className="GuitarDetailHeader">
      <div className="Guitars__left">
        <Logo />
        <div className="Guitars__left__texts">
          <p className="satoshi56">Active Precision Bass® PH V</p>
        </div>

        <Link to="/" className="cc16">
          <span className="arrowleft"></span>
          Back to List
        </Link>
      </div>

      <div className="Guitars__right">
        <div className="Guitars__right__img">
          <div className="Guitars__right__img__content" />
        </div>
        <span className="Guitars__right__circle" />
      </div>
    </div>
  );
};

export default GuitarDetailHeader;
