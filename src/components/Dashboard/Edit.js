import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ users, selectedUser, setUsers, setIsEditing }) => {
  const id = selectedUser.id;

  const [firstName, setFirstName] = useState(selectedUser.firstName);
  const [lastName, setLastName] = useState(selectedUser.lastName);
  const [email, setEmail] = useState(selectedUser.email);
  const [mobileno, setMobileno] = useState(selectedUser.mobileno);
  const [dateofbirth, setDateofbirth] = useState(selectedUser.dateofbirth);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobileno || !dateofbirth) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const user = {
      id,
      firstName,
      lastName,
      email,
      mobileno,
      dateofbirth,
    };

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1, user);
        break;
      }
    }

    localStorage.setItem("users_data", JSON.stringify(users));
    setUsers(users);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${user.firstName} ${user.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit User</h1>
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
          onChange={(e) => setDateofbirth(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
