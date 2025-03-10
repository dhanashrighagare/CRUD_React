import React, { useState } from "react";
import Swal from "sweetalert2";

const Add = ({ users, setUsers, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobileno || !dateofbirth) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = users.length + 1;
    const newUser = {
      id,
      firstName,
      lastName,
      email,
      mobileno,
      dateofbirth,
    };

    users.push(newUser);
    localStorage.setItem("users_data", JSON.stringify(users));
    setUsers(users);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add User</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="mobileno">Mobile No</label>
        <input
          id="mobileno"
          type="tel"
          maxLength="10"
          name="mobileno"
          value={mobileno}
          onChange={(e) => setMobileno(e.target.value)}
        />
        <label htmlFor="dateofbirth">Date of birth</label>
        <input
          id="dateofbirth"
          type="dateofbirth"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => setdateofbirth(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
