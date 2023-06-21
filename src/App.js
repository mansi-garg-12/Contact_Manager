import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ContactDetails from "./components/ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  useEffect(() => {
    const reteriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("reteriveData");
    console.log(reteriveData);
    if (reteriveData) setContacts(reteriveData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const getContactIdHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    console.log(newContactList);
    setContacts(newContactList);
  };
  return (
    <div className="ui container">
      <Router>
        <Header />
        <div style={{ marginTop: "90px" }}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ContactList
                  contacts={contacts}
                  deleteContactId={getContactIdHandler}
                />
              }
            ></Route>
            <Route
              path="/add"
              element={<AddContact AddContactHandler={AddContactHandler} />}
            ></Route>

            <Route path="/contact/:id" element={<ContactDetails />}></Route>
          </Routes>
        </div>
        {/* <AddContact AddContactHandler={AddContactHandler} />
        <ContactList
          contacts={contacts}
          deleteContactId={getContactIdHandler}
        /> */}
      </Router>
    </div>
  );
}

export default App;
