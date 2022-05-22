import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
export default function Signup() {
  const [val, setval] = useState("");

  const [obj, setobj] = useState({
    email: "",
    password: "",
  });

  const setemail = (e) => {
    setobj({
      email: e.target.value,
      password: obj.password,
    });
  };
  const setpass = (e) => {
    setobj({
      email: obj.email,
      password: e.target.value,
    });
  };

  const submit = () => {
    axios.post("http://localhost:5000/login", obj).then((response) => {
      setval(response.data);
    });
  };

  return (
    <>
      <div className="login">
        <div className="logininput">
          <input
            type="email"
            name="email"
            placeholder="Email-Id"
            className="logininp"
            value={obj.email}
            onChange={setemail}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="logininp"
            value={obj.password}
            onChange={setpass}
          ></input>
        </div>

        <div>
          <button className="btns" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
      <div className="message">{val}</div>
    </>
  );
}
