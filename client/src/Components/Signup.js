import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
export default function Signup() {
  const [obj, setobj] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const [val, setval] = useState("");

  const setfirst = (e) => {
    setobj({
      firstname: e.target.value,
      lastname: obj.lastname,
      number: obj.number,
      email: obj.email,
      password: obj.password,
      confirmpass: obj.confirmpass,
    });
  };
  const setlast = (e) => {
    setobj({
      firstname: obj.firstname,
      lastname: e.target.value,
      number: obj.number,
      email: obj.email,
      password: obj.password,
      confirmpass: obj.confirmpass,
    });
  };
  const setnumber = (e) => {
    setobj({
      firstname: obj.firstname,
      lastname: obj.lastname,
      number: e.target.value,
      email: obj.email,
      password: obj.password,
      confirmpass: obj.confirmpass,
    });
  };
  const setemail = (e) => {
    setobj({
      firstname: obj.firstname,
      lastname: obj.lastname,
      number: obj.number,
      email: e.target.value,
      password: obj.password,
      confirmpass: obj.confirmpass,
    });
  };
  const setpassword = (e) => {
    setobj({
      firstname: obj.firstname,
      lastname: obj.lastname,
      number: obj.number,
      email: obj.email,
      password: e.target.value,
      confirmpass: obj.confirmpass,
    });
  };
  const setconf = (e) => {
    setobj({
      firstname: obj.firstname,
      lastname: obj.lastname,
      number: obj.number,
      email: obj.email,
      password: obj.password,
      confirmpass: e.target.value,
    });
  };

  const submit = () => {
    console.log(obj);
    axios.post("http://localhost:5000/signup", obj).then((response) => {
      setval(response.data);
    });
  };

  return (
    <div className="signup">
      <div className="input">
        <input
          type="text"
          name="firstname"
          placeholder="FirstName"
          className="inp"
          value={obj.firstname}
          onChange={setfirst}
        ></input>
        <input
          type="text"
          name="lastname"
          placeholder="LastName"
          className="inp"
          value={obj.lastname}
          onChange={setlast}
        ></input>
      </div>
      <div className="input">
        <input
          type="number"
          name="number"
          placeholder="Mobile No."
          className="inp"
          value={obj.number}
          onChange={setnumber}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email-Id"
          className="inp"
          value={obj.email}
          onChange={setemail}
        ></input>
      </div>
      <div className="input">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inp"
          value={obj.password}
          onChange={setpassword}
        ></input>
        <input
          type="password"
          name="confrimpassword"
          placeholder="Confirm password"
          className="inp"
          value={obj.confirmpass}
          onChange={setconf}
        ></input>
      </div>

      <div>
        <button className="btns" onClick={submit}>
          Submit
        </button>
      </div>
      <div className="message">{val}</div>
    </div>
  );
}
