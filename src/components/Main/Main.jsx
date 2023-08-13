import React, { useState } from "react";
import "./Main.css";
import Orgpeople from "../Orgpeople/Orgpeople";
import Orgpeopledetail from "../Orgpeopledetail/Orgpeopledetail";

const Main = () => {
  const [hide, setHide] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);

  const handleCardClick = (founder) => {
    setSelectedFounder(founder);
    setHide(true);
  };

  const handleCloseClick = () => {
    setSelectedFounder(null);
    setHide(false);
  };

  return (
    <div className="main">
      <div className="orgPeople">
        <Orgpeople handleCardClick={handleCardClick} />
      </div>
      {hide && (
        <div className="orgPeopleDetail">
          <Orgpeopledetail
            userDetail={selectedFounder}
            handleCloseClick={handleCloseClick}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
