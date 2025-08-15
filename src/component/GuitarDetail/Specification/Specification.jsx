import React from "react";
import "./Specification.scss";

const Specification = ({
  description,
  bodyWood,
  bridge,
  fingerboardWood,
  neckWood,
  pickups,
  scaleLength,
  tuners,
}) => {
  return (
    <div className="Specification">
      <p className="satoshi24light">{description}</p>

      <ul className="Specification__ul">
        <li>
          <p className="satoshi24light">Body Wood:</p>
          <p className="satoshi24light">"{bodyWood}"</p>
        </li>

        <li>
          <p className="satoshi24light">Neck Wood:</p>
          <p className="satoshi24light">"{neckWood}"</p>
        </li>

        <li>
          <p className="satoshi24light">Fingerboard:</p>
          <p className="satoshi24light">"{fingerboardWood}"</p>
        </li>

        <li>
          <p className="satoshi24light">Pickups:</p>
          <p className="satoshi24light">"{pickups}"</p>
        </li>

        <li>
          <p className="satoshi24light">Tuners:</p>
          <p className="satoshi24light">"{tuners}"</p>
        </li>

        <li>
          <p className="satoshi24light">Scale Length:</p>
          <p className="satoshi24light">"{scaleLength}"</p>
        </li>

        <li>
          <p className="satoshi24light">Bridge:</p>
          <p className="satoshi24light">"{bridge}"</p>
        </li>
      </ul>
    </div>
  );
};

export default Specification;
