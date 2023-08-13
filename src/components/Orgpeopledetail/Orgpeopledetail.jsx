import React from "react";
import "./Orgpeopledetail.css";
import score from "../../img/score.png";

const Orgpeopledetail = ({ userDetail, handleCloseClick }) => {
  return (
    <div>
      {userDetail ? (
        <div className="userDetailContainer">
          <span className="closeButton" onClick={handleCloseClick}>
            <i className="fa fa-close"></i>
          </span>
          <div className="userImg">
            <img src={userDetail.img} alt="" />
          </div>
          <div className="userDetails">
            <div className="userText name">{userDetail.name}</div>
            <div className="userText designation">{userDetail.designation}</div>
            <div className="userText email">{userDetail.email}</div>
          </div>
          <div className="scoreContainer">
            <h4>Score</h4>
            <div className="scoreImgContainer">
              <img src={score} alt="" />
              <span className="scorePercent">{userDetail.score}%</span>
            </div>
          </div>
        </div>
      ) : (
        "No user selected"
      )}
    </div>
  );
};

export default Orgpeopledetail;
