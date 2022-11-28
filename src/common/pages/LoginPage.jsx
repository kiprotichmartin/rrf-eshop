import React, { useState } from "react";
import "../../style/LoginPage.css";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  // use state constants for the the form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="login-section">
        <form className="login-form">
          <h2 className="login-title">Welcome 👏🏾</h2>
          <label className="label email-label" htmlFor="email-input">
            Email:
          </label>
          <input
            className="input email-input"
            type="email"
            name="login-email"
            id="email-input"
            placeholder="enter email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label pwd-label" htmlFor="pwd-input">
            Password:
          </label>
          <input
            className="input pwd-input"
            type="password"
            name="login-pwd"
            id="pwd-input"
            placeholder="enter password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-login" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
