import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  const ImageHandler = () => {
    alert("details of user are " + name + " " + email);
  };

  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={user}
        alt="user"
        onClick={ImageHandler}
      ></img>
      <Link
        to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
      >
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </Link>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
        style={{ color: "red", marginTop: "7px", marginLeft: "100px" }}
      ></i>
    </div>
  );
}
