import React, { useState } from "react";
import "./SpecAndWhoPlay.scss";
import Specification from "../Specification/Specification";
import WhoPlaysIt from "../WhoPlaysIt/WhoPlaysIt";
import { useFindUniqueModel } from "../../../hooks/useFindUniqueModel";

const SpecAndWhoPlay = ({specification, whoplaysit, description}) => {
  const [activeTab, setActiveTab] = useState("specification");

  return (
    <div className="SpecAndWhoPlay">
      <div className="SpecAndWhoPlay__header">
        <p
          className={`specification satoshi24regular ${
            activeTab === "specification" ? "active" : ""
          }`}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </p>
        <p
          className={`who__plays__it satoshi24regular ${
            activeTab === "who__plays__it" ? "active" : ""
          }`}
          onClick={() => setActiveTab("who__plays__it")}
        >
          Who plays it?
        </p>
      </div>

      <div className="SpecAndWhoPlay__pages">
        {activeTab === "specification" &&
            <Specification
              key={specification.id}
              description={description}
              bodyWood={specification.bodyWood}
              bridge={specification.bridge}
              fingerboardWood={specification.fingerboardWood}
              neckWood={specification.neckWood}
              pickups={specification.pickups}
              scaleLength={specification.scaleLength}
              tuners={specification.tuners}
            />
        }

        {activeTab === "who__plays__it" && <WhoPlaysIt musicians={whoplaysit}/>}
      </div>
    </div>
  );
};

export default SpecAndWhoPlay;
