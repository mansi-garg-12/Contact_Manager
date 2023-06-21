import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 style={{ align: "center" }}>Contact Manager</h2>
        <Link to="/">
          <i
            class="fa fa-home"
            style={{ fontSize: "36px", marginLeft: "700px" }}
          ></i>
        </Link>
      </div>
    </div>
  );
}
