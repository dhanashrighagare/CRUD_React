import React from "react";

const Table = ({ users, handleEdit, handleDelete }) => {
  users.forEach((user, i) => {
    users.id = i + 1;
  });

  const formatMobileNo = (mobileNo) => {
    if (!mobileNo) return ""; // Handle case where mobileNo is empty or undefined
    // Regular expression to format mobile number as xxx-xxx-xxxx
    return mobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };


  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Date of Birth</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{formatMobileNo(user.mobileno)}</td>
                <td>{user.dateofbirth} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
