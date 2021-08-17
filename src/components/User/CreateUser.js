import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";


export default function CreateUser() {
  const [userName, setUserName] = useState("");
  const [postion, setPostion] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  const userContext= useContext(UserContext);

  const history= useHistory();

  function addUser(event)
  {
    event.preventDefault();
    let userObj={userName,postion,office,age,startDate,salary};
    console.log(userObj);
    userContext.setUserList([...userContext.userList,userObj])
    history.push("/users");
    return false;
  }

  return (
    <div style={{margin:"10px"}}>
      <form onSubmit={(e)=>addUser(e)}>
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
