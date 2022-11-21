import React, { useState } from "react";
import "../../style/LoginPage.css";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

export default function LoginPage() {
  // use state constants for the the form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  // A quick check on the name field to make it mandatory
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    console.log("register the user");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
        })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            )
          )
          .catch((error) => {
            console.log("user not updated");
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

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
          <button className="btn btn-login" type="submit" onClick={loginToApp}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
