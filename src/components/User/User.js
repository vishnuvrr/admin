import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

export default function User() {
  const userContext = useContext(UserContext);
  const [userData, setUserData] = useState(userContext.userList);
  console.log(userData);
  console.log("component reloaded");

  let deleteUser = (id) => {
    let userDelete= window.confirm("Are you sure you want to delete?");
    if(userDelete)
    {
      let newUserData = userData.filter((ele, index) => index !== id);
      console.log(newUserData);
      setUserData(newUserData);
      userContext.setUserList(newUserData);
    }

  };

  return (
    <div className="card shadow mb-4" style={{ margin: "30px" }}>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">USERS</h6>
      </div>
      <Link to="/users/create/">
        <button className="btn btn-primary" style={{ margin: "10px" }}>
          Create User
        </button>
      </Link>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>

              {userData.map((obj, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj.userName}</td>
                    <td>{obj.postion}</td>
                    <td>{obj.office}</td>
                    <td>{obj.age}</td>
                    <td>{obj.startDate}</td>
                    <td>{obj.salary}</td>
                    <td>
                      <Link to={`users/edit/${index + 1}`}>
                        <button className="btn btn-primary">EDIT</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(index);
                        }}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
