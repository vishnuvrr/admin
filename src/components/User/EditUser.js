import React, { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import { useHistory, useParams } from "react-router-dom";

export default function EditUser(props) {
  const [userName, setUserName] = useState("");
  const [postion, setPostion] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  const userContext = useContext(UserContext);
  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    console.log(userContext);
    let userData = userContext.userList[id - 1];
    setUserName(userData.userName);
    setPostion(userData.postion);
    setOffice(userData.office);
    setAge(userData.age);
    setStartDate(userData.startDate);
    setSalary(userData.salary);
  }, []);

  function EditUser(event) {
    event.preventDefault();
    let userObj = { userName, postion, office, age, startDate, salary };
    console.log(userObj);
    userContext.userList[id - 1] = userObj;
    userContext.setUserList([...userContext.userList]);

    history.push("/users");
    return false;
  }

  return (
    <div style={{ margin: "10px" }}>
      <form onSubmit={(e) => EditUser(e)}>
        <div className="conatiner">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="userName" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                id="userName"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="position" class="form-label">
                Position
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setPostion(e.target.value)}
                value={postion}
                id="postion"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="office" class="form-label">
                Office
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setOffice(e.target.value)}
                value={office}
                id="office"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="age" class="form-label">
                Age
              </label>
              <input
                type="number"
                class="form-control"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                id="age"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="startdate" class="form-label">
                Start date
              </label>
              <input
                type="date"
                class="form-control"
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                id="startdate"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="salary" class="form-label">
                Salary
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
                id="salary"
              />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
