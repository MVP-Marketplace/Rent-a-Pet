import React from "react";
// import { Row, Col, Button } from "react-bootstrap";
import SignUpModal from "./../SignUpModal";
import Logo from "./../../assets/img/Logo.svg";
import "./style.css";

export default function SignUp() {
  return (
    <div className="sign-up-component">
      <span style={{ fontSize: 24, color: "red" }}>
        Will need to add styling
      </span>
      <div style={{ margin: 10, borderBottom: "2px #B2AFCE solid" }}>
        <img src={Logo} alt="Heart with a paw" />
      </div>
      <div>WE ARE EXCITED TO GET TO KNOW YOU!</div>
      <div>Choose a sign up option:</div>
      <SignUpModal />
      {/* <button className="sign-up-btn">Sign Up with Email</button> */}
      <button className="sign-up-btn">Sign Up with Twitter</button>
      <button className="sign-up-btn">Sign Up with Google</button>
      <button className="sign-up-btn">Sign Up with Apple</button>
      <div>
        Already have an account?<a href="/login">Log in</a>
      </div>
      <div>
        By signing up, you agree to our Privacy Policy and Terms of Service.
      </div>
    </div>
  );
}
