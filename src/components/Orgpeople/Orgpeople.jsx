import React from "react";
import "./Orgpeople.css";
import { userData } from "../../data"; // Assuming data.js is in the same directory

const getHRData = (person) => {
  if (person.designation === "HR") {
    return [person];
  } else {
    let hrData = [];
    for (const child of person.children) {
      hrData = hrData.concat(getHRData(child));
    }
    return hrData;
  }
};

const Orgpeople = ({ handleCardClick }) => {
  const founders = userData.children.filter(
    (individual) => individual.designation === "Founder"
  );

  const ceos = userData.children.filter(
    (individual) => individual.designation === "CEO"
  );

  const hrMembers = getHRData(userData);

  return (
    <div className="orgpeople">
      <div className="founders">
        {founders.map((founder, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(founder)}
          >
            <div className="cardImg">
              <img src={founder.img} alt="" />
            </div>
            <div className="cardDetails">
              <div className="cardText">{founder.name}</div>
              <div className="cardText designation">{founder.designation}</div>
              <div className="cardText email">{founder.email}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="employers">
        <div className="ceoSection">
          {ceos.map((ceo, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(ceo)}
            >
              <div className="cardImg">
                <img src={ceo.img} alt="" />
              </div>
              <div className="cardDetails">
                <div className="cardText">{ceo.name}</div>
                <div className="cardText designation">{ceo.designation}</div>
                <div className="cardText email">{ceo.email}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="coceoSection">
          {hrMembers.map((hrMember, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(hrMember)}
            >
              <div className="cardImg">
                <img src={hrMember.img} alt="" />
              </div>
              <div className="cardDetails">
                <div className="cardText">{hrMember.name}</div>
                <div className="cardText designation">
                  {hrMember.designation}
                </div>
                <div className="cardText email">{hrMember.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orgpeople;
