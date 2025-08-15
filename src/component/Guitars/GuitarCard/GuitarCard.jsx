import React from "react";
import "./GuitarCard.scss";
import { Link } from "react-router-dom";

const GuitarCard = ({ bgImage, guitarName, guitarPrice, guitraTo, brandId, brandName }) => {
  const formattedPrice = Number(guitarPrice).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Link className="GuitarCard" to={`/guitar/${brandName}/${brandId}/${guitraTo}`}>
      <div className="GuitarCard__top">
        <div
          className="GuitarCard__top__img"
          style={{ content: `url(${bgImage})` }}
        ></div>
      </div>

      <div className="GuitarCard__bottom">
        <p className="satoshi16">{guitarName}</p>

        <p className="satoshi14">${formattedPrice}</p>
      </div>
    </Link>
  );
};

export default GuitarCard;
