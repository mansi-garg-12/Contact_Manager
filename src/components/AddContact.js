import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    console.log("hello");
    if (this.state.name === "" || this.state.email === "") {
      alert("Please Enter the Name & email");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log("newdata");
    console.log(this.props);
    alert("Contact Has been Successfully Added");
  };
  render() {
    return (
      <div className="ui main">
        <br></br>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name "
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email "
              placeholder="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
