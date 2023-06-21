import { React, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    console.log(id);
    props.deleteContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });
  return (
    <div>
      <Link to="/add">
        <button className="ui button blue ">Add Contact</button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
