import React from "react";
import user from "../images/user.png";

export default function ContactDetails(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">name</div>
          <div className="description">email</div>
        </div>
      </div>
    </div>
  );
}
